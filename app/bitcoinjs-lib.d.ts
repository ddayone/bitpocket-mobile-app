interface Transaction {
    
    DEFAULT_SEQUENCE: number;
    SIGHASH_ALL: number;
    SIGHASH_NONE: number;
    SIGHASH_SINGLE: number;
    SIGHASH_ANYONECANPAY: number;
    
    version: number;
    locktime: number;
    ins: Array<{hash: any, index: number, script: any, sequence: number}>;
    outs : Array<{script: any, value: number}>;
    
    fromBuffer(buffer: any) : Transaction;
    fromHex(hex: string) : Transaction;
    
    addInput(hash: any, index: number, sequence?: number, scriptSig?: any) : number;
    addOutput(scriptPubKey: any, value: number) : number;
    
    isCoinbaseHash() : boolean;
    byteLength() : number;
    clone() : Transaction;
    
    getHash() : string;
    getId() : string;
    toBuffer() : any;
    toHex() : string;
    setInputScript(index: number, scriptSig: any) : void;
    
}

interface address {
    fromOutputScript (scriptPubKey: any, network?: any) : string;
}

declare var bitcoin : {
    Transaction: Transaction ,
    address: address
};

declare module 'bitcoinjs-lib' {
    export = bitcoin;
}