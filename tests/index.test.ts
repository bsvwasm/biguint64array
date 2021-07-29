import { BigUint64ArrayPolyfill } from "../src/biguint64array";
import { assert } from 'chai';

describe('Polyfill Test', function () {
	it('Get max value from Uint8Array', async () => {
        const array = new Uint8Array([0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]);
        const nativeArray = new BigUint64Array(array.buffer);
        const polyfillArray = new BigUint64ArrayPolyfill(array.buffer);
        assert.equal(polyfillArray[0], BigInt(18446744073709551615n));
        assert.equal(polyfillArray[0], nativeArray[0]);
    });
    it('Length of 2 from Uint32Array', async () => {
        const array = new Uint32Array([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]);
        const nativeArray = new BigUint64Array(array.buffer);
        const polyfillArray = new BigUint64ArrayPolyfill(array.buffer);
        assert.equal(polyfillArray[0], BigInt(18446744073709551615n));
        assert.equal(polyfillArray[1], polyfillArray[0]);
        assert.equal(nativeArray[0], polyfillArray[1]);
        assert.equal(nativeArray[1], nativeArray[0]);
    });
});
