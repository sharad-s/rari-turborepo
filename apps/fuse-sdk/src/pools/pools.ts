import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";
import ADDRESSES from "../../contracts/addresses";

import {
  FusePoolDirectory__factory,
  FusePoolLens__factory,
} from "../../contracts/types";
import { filterOnlyObjectProperties } from "../../utils/formatters";
import { getChainIdFromProvider } from "../../utils/web3";
import { FuseAsset, FusePoolData, USDPricedFuseAsset } from "./types";

import { BigNumber, constants, Contract } from "ethers";
import { getEthUsdPriceBN } from "../../utils/getUSDPriceBN";

export const getFusePoolAssetsWithData = async (
  comptrollerAddress: string,
  signerOrProvider: Web3Provider | JsonRpcProvider
): Promise<FuseAsset[]> => {
  const chainId = await getChainIdFromProvider(signerOrProvider);

  // FusePoolLens
  const lens = FusePoolLens__factory.connect(
    ADDRESSES[chainId].FUSE_POOL_LENS_CONTRACT_ADDRESS,
    signerOrProvider
  );

  const data: FuseAsset[] = (
    await lens.callStatic.getPoolAssetsWithData(comptrollerAddress)
  ).map(filterOnlyObjectProperties);

  return data;
};

export const getFusePoolData = async (
  poolIndex: string,
  signerOrProvider: Web3Provider | JsonRpcProvider
) => {
  const chainId = await getChainIdFromProvider(signerOrProvider);

  const directory = FusePoolDirectory__factory.connect(
    ADDRESSES[chainId].FUSE_POOL_DIRECTORY_CONTRACT_ADDRESS,
    signerOrProvider
  );

  const { comptroller: comptrollerAddress, name: unfilteredName } = await directory.pools(
    poolIndex
  );

  // Comptroller Instance
    // const comptroller = new Contract()

  // TODO - filter name
  const name = unfilteredName;

  let _assets = await getFusePoolAssetsWithData(comptrollerAddress, signerOrProvider);
  const ethPrice: BigNumber = await getEthUsdPriceBN();

  let totalLiquidityUSD = constants.Zero;
  let totalSupplyBalanceUSD = constants.Zero;
  let totalBorrowBalanceUSD = constants.Zero;
  let totalSuppliedUSD = constants.Zero;
  let totalBorrowedUSD = constants.Zero;

  let assets: USDPricedFuseAsset[] = [];
  for (let i = 0; i < _assets.length; i++) {
    let asset = _assets[i] as USDPricedFuseAsset;

    asset.supplyBalanceUSD = asset.supplyBalance
      .mul(asset.underlyingPrice)
      .mul(ethPrice)
      .div(constants.WeiPerEther.pow(3));

    asset.borrowBalanceUSD = asset.borrowBalance
      .mul(asset.underlyingPrice)
      .mul(ethPrice)
      .div(constants.WeiPerEther.pow(3));

    asset.totalSupplyUSD = asset.totalSupply
      .mul(asset.underlyingPrice)
      .mul(ethPrice)
      .div(constants.WeiPerEther.pow(3));

    asset.totalBorrowUSD = asset.totalBorrow
      .mul(asset.underlyingPrice)
      .mul(ethPrice)
      .div(constants.WeiPerEther.pow(3));

    asset.liquidityUSD = asset.liquidity
      .mul(asset.underlyingPrice)
      .mul(ethPrice)
      .div(constants.WeiPerEther.pow(3));

    totalSuppliedUSD = totalSuppliedUSD.add(asset.totalSupplyUSD);
    totalBorrowedUSD = totalBorrowedUSD.add(asset.totalBorrowUSD);
    totalSupplyBalanceUSD = totalSupplyBalanceUSD.add(asset.supplyBalanceUSD);
    totalBorrowBalanceUSD = totalBorrowBalanceUSD.add(asset.borrowBalanceUSD);
    totalLiquidityUSD.add(asset.liquidityUSD);

    assets.push(asset);
  }

  // const fusePoolData: FusePoolData = {
  //   assets: assets.sort((a, b) => (b.liquidityUSD.gt(a.liquidityUSD) ? 1 : -1)),
  //   comptroller,
  //   name,
  //   isPrivate,
  //   oracle,
  //   oracleModel,
  //   admin,

  //   totalLiquidityUSD,

  //   totalSuppliedUSD,
  //   totalBorrowedUSD,

  //   totalSupplyBalanceUSD,
  //   totalBorrowBalanceUSD,
  //   isAdminWhitelisted,
  // };
};
