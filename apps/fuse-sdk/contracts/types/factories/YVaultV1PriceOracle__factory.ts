/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  YVaultV1PriceOracle,
  YVaultV1PriceOracleInterface,
} from "../YVaultV1PriceOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract CToken",
        name: "cToken",
        type: "address",
      },
    ],
    name: "getUnderlyingPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610485806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063fc57d4df14610030575b600080fd5b6100566004803603602081101561004657600080fd5b50356001600160a01b0316610068565b60408051918252519081900360200190f35b600080826001600160a01b0316636f307dc36040518163ffffffff1660e01b815260040160206040518083038186803b1580156100a457600080fd5b505afa1580156100b8573d6000803e3d6000fd5b505050506040513d60208110156100ce57600080fd5b505160408051637e062a3560e11b815290519192506000916001600160a01b0384169163fc0c546a916004808301926020929190829003018186803b15801561011657600080fd5b505afa15801561012a573d6000803e3d6000fd5b505050506040513d602081101561014057600080fd5b50519050600073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc26001600160a01b038316146101e157604080516315d5220f60e31b81526001600160a01b03841660048201529051339163aea91078916024808301926020929190829003018186803b1580156101b057600080fd5b505afa1580156101c4573d6000803e3d6000fd5b505050506040513d60208110156101da57600080fd5b50516101eb565b670de0b6b3a76400005b90506000836001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561022857600080fd5b505afa15801561023c573d6000803e3d6000fd5b505050506040513d602081101561025257600080fd5b505160408051631df1ee3f60e21b8152905160ff909216600a0a92506102e39183916102dd9186916001600160a01b038a16916377c7b8fc91600480820192602092909190829003018186803b1580156102ab57600080fd5b505afa1580156102bf573d6000803e3d6000fd5b505050506040513d60208110156102d557600080fd5b5051906102ed565b9061034f565b9695505050505050565b6000826102fc57506000610349565b8282028284828161030957fe5b04146103465760405162461bcd60e51b815260040180806020018281038252602181526020018061042f6021913960400191505060405180910390fd5b90505b92915050565b600061034683836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250600081836104185760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156103dd5781810151838201526020016103c5565b50505050905090810190601f16801561040a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161042457fe5b049594505050505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a264697066735822122077a3655618850cb7d6bb3134107ee0af7446ed81a55505a8e3344834f3aff68f64736f6c634300060c0033";

type YVaultV1PriceOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: YVaultV1PriceOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class YVaultV1PriceOracle__factory extends ContractFactory {
  constructor(...args: YVaultV1PriceOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "YVaultV1PriceOracle";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<YVaultV1PriceOracle> {
    return super.deploy(overrides || {}) as Promise<YVaultV1PriceOracle>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): YVaultV1PriceOracle {
    return super.attach(address) as YVaultV1PriceOracle;
  }
  connect(signer: Signer): YVaultV1PriceOracle__factory {
    return super.connect(signer) as YVaultV1PriceOracle__factory;
  }
  static readonly contractName: "YVaultV1PriceOracle";
  public readonly contractName: "YVaultV1PriceOracle";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YVaultV1PriceOracleInterface {
    return new utils.Interface(_abi) as YVaultV1PriceOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YVaultV1PriceOracle {
    return new Contract(address, _abi, signerOrProvider) as YVaultV1PriceOracle;
  }
}
