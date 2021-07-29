import { BigUint64ArrayPolyfill } from "./biguint64array";

declare global {
    interface Window { BigUint64Array: any; }
}

window.BigUint64Array = window.BigUint64Array || BigUint64ArrayPolyfill;