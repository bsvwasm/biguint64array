export class BigUint64ArrayPolyfill extends DataView {
    constructor(buffer: ArrayBuffer) {
      super(buffer, 0, 8);
  
      for (let index = 0; index < buffer.byteLength; index += this.byteLength) {
        let myIndex = index / 8;
        let slice = buffer.slice(index, index + 8);
        let bigint = this.arrayBufToBigInt(slice, true);
        // console.log('myIndex', myIndex, 'slice', slice, 'bigint', bigint);
        this[index / 8] = bigint;
      }
    }
  
    protected arrayBufToBigInt = (arrayBuf: ArrayBufferLike, littleEndian: boolean | undefined): bigint => {
      let hex: string[] = [];
      const u8 = new Uint8Array(arrayBuf);
  
      u8.forEach(function (i) {
        var h = i.toString(16);
        if (h.length % 2) {
          h = '0' + h;
        }
        hex.push(h);
      });
  
      if (littleEndian) {
        hex.reverse();
      }
  
      return BigInt('0x' + hex.join(''));
    };
  
    public getBigUint64(offset: number, littleEndian: boolean | undefined): bigint {
      let arrayBuf = this.buffer.slice(offset, offset + this.byteLength);
      return this.arrayBufToBigInt(arrayBuf, littleEndian);
    }
  }