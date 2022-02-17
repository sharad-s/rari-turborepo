import { JsonRpcProvider } from "@ethersproject/providers";
import { MAINNET_PROVIDER } from "../constants";
import { getFusePoolAssetsWithData } from "./pools";

describe("testing tests", () => {
  it("should work", () => {
    expect(1).toBe(1);
  });
});

describe("testing getFusePoolData", () => {
  const provider = new JsonRpcProvider(MAINNET_PROVIDER);
  const comptroller = "0x814b02c1ebc9164972d888495927fe1697f0fb4c"; // tetras pool mainnet

  it("should call getFusePoolData", async () => {
    const data = await getFusePoolAssetsWithData(comptroller, provider);
    expect(data).toBeDefined();
  });
});
