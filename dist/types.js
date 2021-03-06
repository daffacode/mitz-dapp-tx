export var ContractName;
(function (ContractName) {
    ContractName["Bid"] = "Bid";
    ContractName["BidV2"] = "BidV2";
    ContractName["CollectionFactory"] = "CollectionFactory";
    ContractName["CollectionManager"] = "CollectionManager";
    ContractName["CollectionStore"] = "CollectionStore";
    ContractName["Committee"] = "Committee";
    ContractName["ERC20"] = "ERC20";
    ContractName["ERC721"] = "ERC721";
    ContractName["ERC721CollectionV2"] = "ERC721CollectionV2";
    ContractName["Forwarder"] = "Forwarder";
    ContractName["MANAToken"] = "MANAToken";
    ContractName["Marketplace"] = "Marketplace";
    ContractName["MarketplaceV2"] = "MarketplaceV2";
    ContractName["Rarities"] = "Rarities";
    ContractName["ThirdPartyRegistry"] = "ThirdPartyRegistry";
    ContractName["Tiers"] = "Tiers";
})(ContractName || (ContractName = {}));
export const DOMAIN_TYPE = [
    { name: 'name', type: 'string' },
    { name: 'version', type: 'string' },
    { name: 'verifyingContract', type: 'address' },
    { name: 'salt', type: 'bytes32' }
];
export const META_TRANSACTION_TYPE = [
    { name: 'nonce', type: 'uint256' },
    { name: 'from', type: 'address' },
    { name: 'functionSignature', type: 'bytes' }
];
//# sourceMappingURL=types.js.map