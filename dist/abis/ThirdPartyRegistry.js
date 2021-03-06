export const ThirdPartyRegistry = [
    {
        inputs: [
            {
                internalType: 'address',
                name: '_owner',
                type: 'address'
            },
            {
                internalType: 'address',
                name: '_thirdPartyAgregator',
                type: 'address'
            },
            {
                internalType: 'address',
                name: '_feesCollector',
                type: 'address'
            },
            {
                internalType: 'contract ICommittee',
                name: '_committee',
                type: 'address'
            },
            {
                internalType: 'contract IERC20',
                name: '_acceptedToken',
                type: 'address'
            },
            {
                internalType: 'contract ITiers',
                name: '_itemTiers',
                type: 'address'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'contract IERC20',
                name: '_oldAcceptedToken',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'contract IERC20',
                name: '_newAcceptedToken',
                type: 'address'
            }
        ],
        name: 'AcceptedTokenSet',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'contract ICommittee',
                name: '_oldCommittee',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'contract ICommittee',
                name: '_newCommittee',
                type: 'address'
            }
        ],
        name: 'CommitteeSet',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: '_oldFeesCollector',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: '_newFeesCollector',
                type: 'address'
            }
        ],
        name: 'FeesCollectorSet',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'bool',
                name: '_oldInitialItemValue',
                type: 'bool'
            },
            {
                indexed: false,
                internalType: 'bool',
                name: '_newInitialItemValue',
                type: 'bool'
            }
        ],
        name: 'InitialItemValueSet',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'bool',
                name: '_oldInitialThirdPartyValue',
                type: 'bool'
            },
            {
                indexed: false,
                internalType: 'bool',
                name: '_newInitialThirdPartyValue',
                type: 'bool'
            }
        ],
        name: 'InitialThirdPartyValueSet',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'string',
                name: '_thirdPartyId',
                type: 'string'
            },
            {
                indexed: false,
                internalType: 'string',
                name: '_itemId',
                type: 'string'
            },
            {
                indexed: false,
                internalType: 'string',
                name: '_metadata',
                type: 'string'
            },
            {
                indexed: false,
                internalType: 'bool',
                name: '_value',
                type: 'bool'
            },
            {
                indexed: false,
                internalType: 'address',
                name: '_caller',
                type: 'address'
            }
        ],
        name: 'ItemAdded',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'string',
                name: '_thirdPartyId',
                type: 'string'
            },
            {
                indexed: false,
                internalType: 'string',
                name: '_itemId',
                type: 'string'
            },
            {
                indexed: false,
                internalType: 'string',
                name: '_metadata',
                type: 'string'
            },
            {
                indexed: false,
                internalType: 'string',
                name: '_contentHash',
                type: 'string'
            },
            {
                indexed: false,
                internalType: 'bool',
                name: '_value',
                type: 'bool'
            },
            {
                indexed: false,
                internalType: 'address',
                name: '_caller',
                type: 'address'
            }
        ],
        name: 'ItemReviewed',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'contract ITiers',
                name: '_oldItemTiers',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'contract ITiers',
                name: '_newItemTiers',
                type: 'address'
            }
        ],
        name: 'ItemTiersSet',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'string',
                name: '_thirdPartyId',
                type: 'string'
            },
            {
                indexed: false,
                internalType: 'string',
                name: '_itemId',
                type: 'string'
            },
            {
                indexed: false,
                internalType: 'string',
                name: '_metadata',
                type: 'string'
            },
            {
                indexed: false,
                internalType: 'address',
                name: '_caller',
                type: 'address'
            }
        ],
        name: 'ItemUpdated',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'userAddress',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'relayerAddress',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'functionSignature',
                type: 'bytes'
            }
        ],
        name: 'MetaTransactionExecuted',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address'
            }
        ],
        name: 'OwnershipTransferred',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'string',
                name: '_thirdPartyId',
                type: 'string'
            },
            {
                indexed: false,
                internalType: 'string',
                name: '_metadata',
                type: 'string'
            },
            {
                indexed: false,
                internalType: 'string',
                name: '_resolver',
                type: 'string'
            },
            {
                indexed: false,
                internalType: 'bool',
                name: '_isApproved',
                type: 'bool'
            },
            {
                indexed: false,
                internalType: 'address[]',
                name: '_managers',
                type: 'address[]'
            },
            {
                indexed: false,
                internalType: 'address',
                name: '_caller',
                type: 'address'
            }
        ],
        name: 'ThirdPartyAdded',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: '_oldThirdPartyAgregator',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: '_newThirdPartyAgregator',
                type: 'address'
            }
        ],
        name: 'ThirdPartyAgregatorSet',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'string',
                name: '_thirdPartyId',
                type: 'string'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: '_price',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: '_value',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'address',
                name: '_caller',
                type: 'address'
            }
        ],
        name: 'ThirdPartyItemsBought',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'string',
                name: '_thirdPartyId',
                type: 'string'
            },
            {
                indexed: false,
                internalType: 'bool',
                name: '_value',
                type: 'bool'
            },
            {
                indexed: false,
                internalType: 'address',
                name: '_caller',
                type: 'address'
            }
        ],
        name: 'ThirdPartyReviewed',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'string',
                name: '_thirdPartyId',
                type: 'string'
            },
            {
                indexed: false,
                internalType: 'string',
                name: '_metadata',
                type: 'string'
            },
            {
                indexed: false,
                internalType: 'string',
                name: '_resolver',
                type: 'string'
            },
            {
                indexed: false,
                internalType: 'address[]',
                name: '_managers',
                type: 'address[]'
            },
            {
                indexed: false,
                internalType: 'bool[]',
                name: '_managerValues',
                type: 'bool[]'
            },
            {
                indexed: false,
                internalType: 'address',
                name: '_caller',
                type: 'address'
            }
        ],
        name: 'ThirdPartyUpdated',
        type: 'event'
    },
    {
        inputs: [],
        name: 'acceptedToken',
        outputs: [
            {
                internalType: 'contract IERC20',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '_thirdPartyId',
                type: 'string'
            },
            {
                components: [
                    {
                        internalType: 'string',
                        name: 'id',
                        type: 'string'
                    },
                    {
                        internalType: 'string',
                        name: 'metadata',
                        type: 'string'
                    }
                ],
                internalType: 'struct ThirdPartyRegistry.ItemParam[]',
                name: '_items',
                type: 'tuple[]'
            }
        ],
        name: 'addItems',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'string',
                        name: 'id',
                        type: 'string'
                    },
                    {
                        internalType: 'string',
                        name: 'metadata',
                        type: 'string'
                    },
                    {
                        internalType: 'string',
                        name: 'resolver',
                        type: 'string'
                    },
                    {
                        internalType: 'address[]',
                        name: 'managers',
                        type: 'address[]'
                    },
                    {
                        internalType: 'bool[]',
                        name: 'managerValues',
                        type: 'bool[]'
                    }
                ],
                internalType: 'struct ThirdPartyRegistry.ThirdPartyParam[]',
                name: '_thirdParties',
                type: 'tuple[]'
            }
        ],
        name: 'addThirdParties',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '_thirdPartyId',
                type: 'string'
            },
            {
                internalType: 'uint256',
                name: '_tierIndex',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_price',
                type: 'uint256'
            }
        ],
        name: 'buyItemSlots',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'committee',
        outputs: [
            {
                internalType: 'contract ICommittee',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'domainSeparator',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'userAddress',
                type: 'address'
            },
            {
                internalType: 'bytes',
                name: 'functionSignature',
                type: 'bytes'
            },
            {
                internalType: 'bytes32',
                name: 'sigR',
                type: 'bytes32'
            },
            {
                internalType: 'bytes32',
                name: 'sigS',
                type: 'bytes32'
            },
            {
                internalType: 'uint8',
                name: 'sigV',
                type: 'uint8'
            }
        ],
        name: 'executeMetaTransaction',
        outputs: [
            {
                internalType: 'bytes',
                name: '',
                type: 'bytes'
            }
        ],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'feesCollector',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getChainId',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'pure',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'user',
                type: 'address'
            }
        ],
        name: 'getNonce',
        outputs: [
            {
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'initialItemValue',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'initialThirdPartyValue',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '_thirdPartyId',
                type: 'string'
            },
            {
                internalType: 'address',
                name: '_manager',
                type: 'address'
            }
        ],
        name: 'isThirdPartyManager',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '_thirdPartyId',
                type: 'string'
            },
            {
                internalType: 'uint256',
                name: '_index',
                type: 'uint256'
            }
        ],
        name: 'itemIdByIndex',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'itemTiers',
        outputs: [
            {
                internalType: 'contract ITiers',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '_thirdPartyId',
                type: 'string'
            },
            {
                internalType: 'string',
                name: '_itemId',
                type: 'string'
            }
        ],
        name: 'itemsById',
        outputs: [
            {
                components: [
                    {
                        internalType: 'string',
                        name: 'metadata',
                        type: 'string'
                    },
                    {
                        internalType: 'string',
                        name: 'contentHash',
                        type: 'string'
                    },
                    {
                        internalType: 'bool',
                        name: 'isApproved',
                        type: 'bool'
                    },
                    {
                        internalType: 'uint256',
                        name: 'registered',
                        type: 'uint256'
                    }
                ],
                internalType: 'struct ThirdPartyRegistry.Item',
                name: '',
                type: 'tuple'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '_thirdPartyId',
                type: 'string'
            }
        ],
        name: 'itemsCount',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'string',
                        name: 'id',
                        type: 'string'
                    },
                    {
                        internalType: 'bool',
                        name: 'value',
                        type: 'bool'
                    },
                    {
                        components: [
                            {
                                internalType: 'string',
                                name: 'id',
                                type: 'string'
                            },
                            {
                                internalType: 'string',
                                name: 'metadata',
                                type: 'string'
                            },
                            {
                                internalType: 'string',
                                name: 'contentHash',
                                type: 'string'
                            },
                            {
                                internalType: 'bool',
                                name: 'value',
                                type: 'bool'
                            }
                        ],
                        internalType: 'struct ThirdPartyRegistry.ItemReviewParam[]',
                        name: 'items',
                        type: 'tuple[]'
                    }
                ],
                internalType: 'struct ThirdPartyRegistry.ThirdPartyReviewParam[]',
                name: '_thirdParties',
                type: 'tuple[]'
            }
        ],
        name: 'reviewThirdParties',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'contract IERC20',
                name: '_newAcceptedToken',
                type: 'address'
            }
        ],
        name: 'setAcceptedToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'contract ICommittee',
                name: '_newCommittee',
                type: 'address'
            }
        ],
        name: 'setCommittee',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_newFeesCollector',
                type: 'address'
            }
        ],
        name: 'setFeesCollector',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bool',
                name: '_newinitialItemValue',
                type: 'bool'
            }
        ],
        name: 'setInitialItemValue',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bool',
                name: '_newinitialThirdPartyValue',
                type: 'bool'
            }
        ],
        name: 'setInitialThirdPartyValue',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'contract ITiers',
                name: '_newItemTiers',
                type: 'address'
            }
        ],
        name: 'setItemTiers',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_newThirdPartyAgregator',
                type: 'address'
            }
        ],
        name: 'setThirdPartyAgregator',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        name: 'thirdParties',
        outputs: [
            {
                internalType: 'string',
                name: 'metadata',
                type: 'string'
            },
            {
                internalType: 'string',
                name: 'resolver',
                type: 'string'
            },
            {
                internalType: 'uint256',
                name: 'maxItems',
                type: 'uint256'
            },
            {
                internalType: 'bool',
                name: 'isApproved',
                type: 'bool'
            },
            {
                internalType: 'uint256',
                name: 'registered',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'thirdPartiesCount',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'thirdPartyAgregator',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        name: 'thirdPartyIds',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newOwner',
                type: 'address'
            }
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '_thirdPartyId',
                type: 'string'
            },
            {
                components: [
                    {
                        internalType: 'string',
                        name: 'id',
                        type: 'string'
                    },
                    {
                        internalType: 'string',
                        name: 'metadata',
                        type: 'string'
                    }
                ],
                internalType: 'struct ThirdPartyRegistry.ItemParam[]',
                name: '_items',
                type: 'tuple[]'
            }
        ],
        name: 'updateItems',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'string',
                        name: 'id',
                        type: 'string'
                    },
                    {
                        internalType: 'string',
                        name: 'metadata',
                        type: 'string'
                    },
                    {
                        internalType: 'string',
                        name: 'resolver',
                        type: 'string'
                    },
                    {
                        internalType: 'address[]',
                        name: 'managers',
                        type: 'address[]'
                    },
                    {
                        internalType: 'bool[]',
                        name: 'managerValues',
                        type: 'bool[]'
                    }
                ],
                internalType: 'struct ThirdPartyRegistry.ThirdPartyParam[]',
                name: '_thirdParties',
                type: 'tuple[]'
            }
        ],
        name: 'updateThirdParties',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    }
];
//# sourceMappingURL=ThirdPartyRegistry.js.map