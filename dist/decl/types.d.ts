import { ChainId } from '@mitz/schems';
export interface EIPProvider {
    request: (reqArgs: {
        method: string;
        params?: any[];
    }) => Promise<any>;
    sendAsync?: (reqArgs: {
        method: string;
        params?: any[];
    }) => Promise<any>;
    send?: (method: string, params?: any[]) => Promise<any>;
}
export interface LegacyProvider {
    sendAsync?: (reqArgs: {
        method: string;
        params?: any[];
    }) => Promise<any>;
    send: (method: string, params: any[]) => Promise<any>;
}
export declare type Provider = EIPProvider | LegacyProvider;
export declare type DomainType = {
    name: string;
    type: string;
};
export declare type MetaTransactionType = {
    name: string;
    type: string;
};
export declare type DomainData = {
    name: string;
    version: string;
    verifyingContract: string;
    salt: string;
};
export declare type FunctionSignature = string;
export declare type ContractData = {
    abi: object[];
    address: string;
    name: string;
    version: string;
    chainId: ChainId;
};
export declare enum ContractName {
    Bid = "Bid",
    BidV2 = "BidV2",
    CollectionFactory = "CollectionFactory",
    CollectionManager = "CollectionManager",
    CollectionStore = "CollectionStore",
    Committee = "Committee",
    ERC20 = "ERC20",
    ERC721 = "ERC721",
    ERC721CollectionV2 = "ERC721CollectionV2",
    Forwarder = "Forwarder",
    MANAToken = "MANAToken",
    Marketplace = "Marketplace",
    MarketplaceV2 = "MarketplaceV2",
    Rarities = "Rarities",
    ThirdPartyRegistry = "ThirdPartyRegistry",
    Tiers = "Tiers"
}
export declare type MetaTxData = {
    functionSignature: string;
    contractData: ContractData;
};
export declare type DataToSign = {
    types: {
        EIP712Domain: DomainType[];
        MetaTransaction: MetaTransactionType[];
    };
    domain: DomainData;
    primaryType: 'MetaTransaction';
    message: {
        nonce: number;
        from: string;
        functionSignature: FunctionSignature;
    };
};
export declare type Configuration = {
    serverURL: string;
};
export declare const DOMAIN_TYPE: DomainType[];
export declare const META_TRANSACTION_TYPE: MetaTransactionType[];
//# sourceMappingURL=types.d.ts.map