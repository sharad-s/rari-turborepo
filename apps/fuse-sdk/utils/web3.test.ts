import { JsonRpcProvider } from "@ethersproject/providers";
import { MAINNET_PROVIDER } from "../src/constants";
import { getChainIdFromProvider } from "./web3";

describe("testing tests", () => {
  it("should work", () => {
    expect(1).toBe(1);
  });
});

describe("testing getChainIdFromProvider", () => {
  const provider = new JsonRpcProvider(MAINNET_PROVIDER);

  it("should return the proper chainId from the provider", async () => {
    const chainId = await getChainIdFromProvider(provider);
    console.log({ chainId });
    expect(chainId).toBe(1);
  });
});
