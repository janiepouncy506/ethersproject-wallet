import { Wallet as OriginalWallet, verifyMessage, verifyTypedData } from "@ethersproject/wallet";
import type { Provider } from "@ethersproject/providers";
declare class Wallet extends OriginalWallet {
    constructor(key: string, provider?: Provider);
}
export { verifyMessage, verifyTypedData, Wallet };
