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


    // it('Add 2 64bit numbers together', async () => {
    //     let number_1 = BigInt("4294967297");
    //     let number_2 = BigInt("4294967297");

    //     let output = number_1 + number_2;

    //     assert.equal(output, 8589934594n, "Added numbers did not match.");



    //     const array = new Uint8Array([0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]);
    //     const nativeArray = new BigUint64Array(array.buffer);
    //     const polyfillArray = new BigUint64ArrayPolyfill(array.buffer);


    //     assert.equal(polyfillArray[0], BigInt(18446744073709551615n));
    //     assert.equal(polyfillArray[0], nativeArray[0]);
    // });
});

/**
 * Tests from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigUint64Array
 */
describe("Ways to create a BigUint64Array", function() {
    it("Gets created from a length", function() {
        let biguint64 = new BigUint64Array(2);
        biguint64[0] = 42n;
        assert.equal(biguint64[0], 42n); // 42n
        assert.equal(biguint64.length, 2); // 2
        assert.equal(biguint64.BYTES_PER_ELEMENT, 8); // 8

        let biguint64_poly = new BigUint64ArrayPolyfill(2);
        biguint64_poly[0] = 42n;
        assert.equal(biguint64_poly[0], 42n); // 42n
        assert.equal(biguint64_poly.length, 2); // 2
        assert.equal(biguint64_poly.BYTES_PER_ELEMENT, 8); // 8
    });
})