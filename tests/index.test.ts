import { BigUint64ArrayPolyfill } from "../src/biguint64array";
import { assert } from 'chai';

describe('Polyfill Test', function () {
	it('Get max value', async () => {
        const array = new Uint8Array([0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]);
        const nativeArray = new BigUint64Array(array.buffer);
        const polyfillArray = new BigUint64ArrayPolyfill(array.buffer);
        console.log(polyfillArray[0]);
        console.log(nativeArray[0]);
        assert.equal(polyfillArray[0], BigInt(18446744073709551615n));
        assert.equal(polyfillArray[0], nativeArray[0]);
    });
});
