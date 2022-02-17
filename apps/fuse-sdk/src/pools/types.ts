import { BigNumber } from "ethers";

export interface FuseAsset {
  cToken: string;

  borrowBalance: BigNumber;
  supplyBalance: BigNumber;
  liquidity: BigNumber;

  membership: boolean;

  underlyingName: string;
  underlyingSymbol: string;
  underlyingToken: string;
  underlyingDecimals: BigNumber;
  underlyingPrice: BigNumber;
  underlyingBalance: BigNumber;

  collateralFactor: BigNumber;
  reserveFactor: BigNumber;

  adminFee: BigNumber;
  fuseFee: BigNumber;
  oracle: string;

  borrowRatePerBlock: BigNumber;
  supplyRatePerBlock: BigNumber;

  totalBorrow: BigNumber;
  totalSupply: BigNumber;

  borrowGuardianPaused: boolean;
}

export interface USDPricedFuseAsset extends FuseAsset {
  supplyBalanceUSD: BigNumber;
  borrowBalanceUSD: BigNumber;

  totalSupplyUSD: BigNumber;
  totalBorrowUSD: BigNumber;

  liquidityUSD: BigNumber;
}
export interface FusePoolData {
  assets: USDPricedFuseAsset[];
  comptroller: string;
  name: string;
  oracle: string;
  oracleModel: string | undefined;
  isPrivate: boolean;
  totalLiquidityUSD: BigNumber;
  totalSuppliedUSD: BigNumber;
  totalBorrowedUSD: BigNumber;
  totalSupplyBalanceUSD: BigNumber;
  totalBorrowBalanceUSD: BigNumber;
  id?: number;
  admin: string;
  isAdminWhitelisted: boolean;
}
