import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";
import ADDRESSES from "../../contracts/addresses";
import { FusePoolLens__factory } from "../../contracts/types";

export const getFusePoolData = async (
  comptrollerAddress: string,
  signerOrProvider: Web3Provider | JsonRpcProvider
) => {
  const chainId = signerOrProvider.network.chainId;
  // FusePoolLens
  const lens = FusePoolLens__factory.connect(
    ADDRESSES[chainId].FUSE_POOL_LENS_CONTRACT_ADDRESS,
    signerOrProvider
  );

  const data = await lens.getPoolAssetsWithData(comptrollerAddress);

  console.log({ data });

  return data;
};
