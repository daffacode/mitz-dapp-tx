export var ErrorCode;
(function (ErrorCode) {
    ErrorCode["INVALID_ADDRESS"] = "invalid_address";
    ErrorCode["CONTRACT_ACCOUNT"] = "contract_account";
    ErrorCode["USER_DENIED"] = "user_denied";
    ErrorCode["UNKNOWN"] = "unknown";
})(ErrorCode || (ErrorCode = {}));
export class MetaTransactionError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, MetaTransactionError.prototype);
    }
}
//# sourceMappingURL=errors.js.map