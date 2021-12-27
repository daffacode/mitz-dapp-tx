export declare enum ErrorCode {
    INVALID_ADDRESS = "invalid_address",
    CONTRACT_ACCOUNT = "contract_account",
    USER_DENIED = "user_denied",
    UNKNOWN = "unknown"
}
export declare class MetaTransactionError extends Error {
    code: ErrorCode;
    constructor(message: string, code: ErrorCode);
}
//# sourceMappingURL=errors.d.ts.map