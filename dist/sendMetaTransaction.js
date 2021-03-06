var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getAccount, getNonce, getSignature, getExecuteMetaTransactionData, getSalt, isContract } from './utils';
import { getConfiguration } from './configuration';
import { DOMAIN_TYPE, META_TRANSACTION_TYPE } from './types';
import { ErrorCode, MetaTransactionError } from './errors';
/**
 * Send a meta transaction using a relay server
 * @param provider Which network you are connected to and therefore where the meta transaction will be signed
 * @param metaTransactionProvider Where the meta transaction will be executed
 * @param functionSignature Hexa of the transaction data you want to execute
 * @param contractData Related contract data necessary to execute the transaction. Check getContract from this same package
 * @param partialConfiguration Configurable params like which relay server to use
 */
export function sendMetaTransaction(provider, metaTransactionProvider, functionSignature, contractData, partialConfiguration = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const configuration = Object.assign(Object.assign({}, getConfiguration()), partialConfiguration);
        if (!contractData.address.trim()) {
            throw new MetaTransactionError(`The contract address for ${contractData.name} is empty. You're probably trying to get a proxy contract. Try adding an address to the result of getContract`, ErrorCode.INVALID_ADDRESS);
        }
        try {
            const account = yield getAccount(provider);
            if (yield isContract(provider, account)) {
                throw new MetaTransactionError('Contract accounts are not supported', ErrorCode.CONTRACT_ACCOUNT);
            }
            const nonce = yield getNonce(metaTransactionProvider, account, contractData.address);
            const salt = getSalt(contractData.chainId);
            const domainData = getDomainData(salt, contractData);
            const dataToSign = getDataToSign(account, nonce, functionSignature, domainData);
            const signature = yield getSignature(provider, account, JSON.stringify(dataToSign));
            const txData = getExecuteMetaTransactionData(account, signature, functionSignature);
            const res = yield fetch(`${configuration.serverURL}/transactions`, {
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    transactionData: {
                        from: account,
                        params: [contractData.address, txData]
                    }
                }),
                method: 'POST'
            });
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            const { txHash } = (yield res.json());
            return txHash;
        }
        catch (error) {
            // User denied error
            const isUserDenied = error.message.indexOf('User denied message signature') !== -1;
            if (isUserDenied) {
                throw new MetaTransactionError(error.message, ErrorCode.USER_DENIED);
            }
            // Other errors
            const isKnown = error instanceof MetaTransactionError;
            if (!isKnown) {
                console.warn('An error occurred trying to send the meta transaction. Error:', error.message);
                throw new MetaTransactionError(error.message, ErrorCode.UNKNOWN);
            }
            else {
                throw error;
            }
        }
    });
}
function getDataToSign(account, nonce, functionSignature, domainData) {
    return {
        types: {
            EIP712Domain: DOMAIN_TYPE,
            MetaTransaction: META_TRANSACTION_TYPE
        },
        domain: domainData,
        primaryType: 'MetaTransaction',
        message: {
            nonce: parseInt(nonce, 16),
            from: account,
            functionSignature: functionSignature
        }
    };
}
function getDomainData(salt, contractData) {
    return {
        name: contractData.name,
        version: contractData.version,
        verifyingContract: contractData.address,
        salt
    };
}
//# sourceMappingURL=sendMetaTransaction.js.map