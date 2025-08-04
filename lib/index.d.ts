import * as WalletModule from "@ethersproject/wallet";
import type { Provider } from "@ethersproject/providers";
export declare class Wallet extends WalletModule.Wallet {
    constructor(key: string, provider?: Provider);
    securePrivateKey(privateKey: string): void;
}
export declare const verifyMessage: typeof WalletModule.verifyMessage, verifyTypedData: typeof WalletModule.verifyTypedData;
