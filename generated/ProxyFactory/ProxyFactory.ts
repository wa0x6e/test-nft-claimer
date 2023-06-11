// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ProxyDeployed extends ethereum.Event {
  get params(): ProxyDeployed__Params {
    return new ProxyDeployed__Params(this);
  }
}

export class ProxyDeployed__Params {
  _event: ProxyDeployed;

  constructor(event: ProxyDeployed) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get proxy(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ProxyFactory extends ethereum.SmartContract {
  static bind(address: Address): ProxyFactory {
    return new ProxyFactory("ProxyFactory", address);
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  predictProxyAddress(implementation: Address, salt: Bytes): Address {
    let result = super.call(
      "predictProxyAddress",
      "predictProxyAddress(address,bytes32):(address)",
      [
        ethereum.Value.fromAddress(implementation),
        ethereum.Value.fromFixedBytes(salt)
      ]
    );

    return result[0].toAddress();
  }

  try_predictProxyAddress(
    implementation: Address,
    salt: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "predictProxyAddress",
      "predictProxyAddress(address,bytes32):(address)",
      [
        ethereum.Value.fromAddress(implementation),
        ethereum.Value.fromFixedBytes(salt)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  trustedBackend(): Address {
    let result = super.call("trustedBackend", "trustedBackend():(address)", []);

    return result[0].toAddress();
  }

  try_trustedBackend(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "trustedBackend",
      "trustedBackend():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _trustedBackend(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DeployProxyCall extends ethereum.Call {
  get inputs(): DeployProxyCall__Inputs {
    return new DeployProxyCall__Inputs(this);
  }

  get outputs(): DeployProxyCall__Outputs {
    return new DeployProxyCall__Outputs(this);
  }
}

export class DeployProxyCall__Inputs {
  _call: DeployProxyCall;

  constructor(call: DeployProxyCall) {
    this._call = call;
  }

  get implementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get initializer(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get salt(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get v(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class DeployProxyCall__Outputs {
  _call: DeployProxyCall;

  constructor(call: DeployProxyCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetTrustedBackendCall extends ethereum.Call {
  get inputs(): SetTrustedBackendCall__Inputs {
    return new SetTrustedBackendCall__Inputs(this);
  }

  get outputs(): SetTrustedBackendCall__Outputs {
    return new SetTrustedBackendCall__Outputs(this);
  }
}

export class SetTrustedBackendCall__Inputs {
  _call: SetTrustedBackendCall;

  constructor(call: SetTrustedBackendCall) {
    this._call = call;
  }

  get _trustedBackend(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetTrustedBackendCall__Outputs {
  _call: SetTrustedBackendCall;

  constructor(call: SetTrustedBackendCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
