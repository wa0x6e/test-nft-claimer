import {
  OwnershipTransferred as OwnershipTransferredEvent,
  ProxyDeployed as ProxyDeployedEvent
} from "../generated/ProxyFactory/ProxyFactory"
import { OwnershipTransferred, ProxyDeployed } from "../generated/schema"

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProxyDeployed(event: ProxyDeployedEvent): void {
  let entity = new ProxyDeployed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.implementation = event.params.implementation
  entity.proxy = event.params.proxy

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
