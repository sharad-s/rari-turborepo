/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AlphaHomoraV1PriceOracle,
  AlphaHomoraV1PriceOracleInterface,
} from "../AlphaHomoraV1PriceOracle";

const _abi = [
  {
    inputs: [],
    name: "IBETH",
    outputs: [
      {
        internalType: "contract Bank",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
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
  "0x608060405234801561001057600080fd5b506103f0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806378cd49e91461003b578063fc57d4df1461005f575b600080fd5b610043610097565b604080516001600160a01b039092168252519081900360200190f35b6100856004803603602081101561007557600080fd5b50356001600160a01b03166100af565b60408051918252519081900360200190f35b7367b66c99d3eb37fa76aa3ed1ff33e8e39f0b9c7a81565b60007367b66c99d3eb37fa76aa3ed1ff33e8e39f0b9c7a6001600160a01b0316826001600160a01b0316636f307dc36040518163ffffffff1660e01b815260040160206040518083038186803b15801561010857600080fd5b505afa15801561011c573d6000803e3d6000fd5b505050506040513d602081101561013257600080fd5b50516001600160a01b03161461014757600080fd5b6102547367b66c99d3eb37fa76aa3ed1ff33e8e39f0b9c7a6001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561019757600080fd5b505afa1580156101ab573d6000803e3d6000fd5b505050506040513d60208110156101c157600080fd5b505160408051630daf7b9d60e21b8152905161024e91670de0b6b3a7640000917367b66c99d3eb37fa76aa3ed1ff33e8e39f0b9c7a916336bdee74916004808301926020929190829003018186803b15801561021c57600080fd5b505afa158015610230573d6000803e3d6000fd5b505050506040513d602081101561024657600080fd5b50519061025a565b906102ba565b92915050565b60008261026957506000610254565b8282028284828161027657fe5b04146102b35760405162461bcd60e51b815260040180806020018281038252602181526020018061039a6021913960400191505060405180910390fd5b9392505050565b60006102b383836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250600081836103835760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610348578181015183820152602001610330565b50505050905090810190601f1680156103755780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161038f57fe5b049594505050505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220c7f21515d06cb78ee7c1f64c8997aca520579b3f468495a31652e8c332fb35e964736f6c634300060c0033";

type AlphaHomoraV1PriceOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AlphaHomoraV1PriceOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AlphaHomoraV1PriceOracle__factory extends ContractFactory {
  constructor(...args: AlphaHomoraV1PriceOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AlphaHomoraV1PriceOracle";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AlphaHomoraV1PriceOracle> {
    return super.deploy(overrides || {}) as Promise<AlphaHomoraV1PriceOracle>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AlphaHomoraV1PriceOracle {
    return super.attach(address) as AlphaHomoraV1PriceOracle;
  }
  connect(signer: Signer): AlphaHomoraV1PriceOracle__factory {
    return super.connect(signer) as AlphaHomoraV1PriceOracle__factory;
  }
  static readonly contractName: "AlphaHomoraV1PriceOracle";
  public readonly contractName: "AlphaHomoraV1PriceOracle";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AlphaHomoraV1PriceOracleInterface {
    return new utils.Interface(_abi) as AlphaHomoraV1PriceOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AlphaHomoraV1PriceOracle {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AlphaHomoraV1PriceOracle;
  }
}
