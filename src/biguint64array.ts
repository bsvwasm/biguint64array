// export class BigUint64ArrayPolyfill extends DataView {
//     constructor(buffer: ArrayBuffer, byteOffset: number = 0, length: number = 8) {
//       super(buffer, byteOffset, length);
  
//       for (let index = 0; index < buffer.byteLength; index += this.byteLength) {
//         let myIndex = index / 8;
//         let slice = buffer.slice(index, index + 8);
//         let bigint = this.arrayBufToBigInt(slice, true);
//         // console.log('myIndex', myIndex, 'slice', slice, 'bigint', bigint);
//         this[index / 8] = bigint;
//       }
//     }

    
  
//     protected arrayBufToBigInt = (arrayBuf: ArrayBufferLike, littleEndian: boolean | undefined): bigint => {
//       let hex: string[] = [];
//       const u8 = new Uint8Array(arrayBuf);
  
//       u8.forEach(function (i) {
//         var h = i.toString(16);
//         if (h.length % 2) {
//           h = '0' + h;
//         }
//         hex.push(h);
//       });
  
//       if (littleEndian) {
//         hex.reverse();
//       }
  
//       return BigInt('0x' + hex.join(''));
//     };
  
//     public getBigUint64(offset: number, littleEndian: boolean | undefined): bigint {
//       let arrayBuf = this.buffer.slice(offset, offset + this.byteLength);
//       return this.arrayBufToBigInt(arrayBuf, littleEndian);
//     }
//   }


export class BigUint64ArrayPolyfill  extends DataView implements IBigUint64Array, IBigUint64ArrayConstructor {
  [index: number]: bigint;
  BYTES_PER_ELEMENT: number;
  copyWithin(target: number, start: number, end?: number): this {
    throw new Error("Method not implemented.");
  }
  entries(): IterableIterator<[number, bigint]> {
    throw new Error("Method not implemented.");
  }
  every(predicate: (value: bigint, index: number, array: IBigUint64Array) => boolean, thisArg?: any): boolean {
    throw new Error("Method not implemented.");
  }
  fill(value: bigint, start?: number, end?: number): this {
    throw new Error("Method not implemented.");
  }
  filter(predicate: (value: bigint, index: number, array: IBigUint64Array) => any, thisArg?: any): IBigUint64Array {
    throw new Error("Method not implemented.");
  }
  find(predicate: (value: bigint, index: number, array: IBigUint64Array) => boolean, thisArg?: any): bigint {
    throw new Error("Method not implemented.");
  }
  findIndex(predicate: (value: bigint, index: number, array: IBigUint64Array) => boolean, thisArg?: any): number {
    throw new Error("Method not implemented.");
  }
  forEach(callbackfn: (value: bigint, index: number, array: IBigUint64Array) => void, thisArg?: any): void {
    throw new Error("Method not implemented.");
  }
  includes(searchElement: bigint, fromIndex?: number): boolean {
    throw new Error("Method not implemented.");
  }
  indexOf(searchElement: bigint, fromIndex?: number): number {
    throw new Error("Method not implemented.");
  }
  join(separator?: string): string {
    throw new Error("Method not implemented.");
  }
  keys(): IterableIterator<number> {
    throw new Error("Method not implemented.");
  }
  lastIndexOf(searchElement: bigint, fromIndex?: number): number {
    throw new Error("Method not implemented.");
  }
  length: number;
  map(callbackfn: (value: bigint, index: number, array: IBigUint64Array) => bigint, thisArg?: any): IBigUint64Array {
    throw new Error("Method not implemented.");
  }
  reduce(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: IBigUint64Array) => bigint): bigint;
  reduce<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: IBigUint64Array) => U, initialValue: U): U;
  reduce<U>(callbackfn: any, initialValue?: any): bigint | U {
    throw new Error("Method not implemented.");
  }
  reduceRight(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: IBigUint64Array) => bigint): bigint;
  reduceRight<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: IBigUint64Array) => U, initialValue: U): U;
  reduceRight<U>(callbackfn: any, initialValue?: any): bigint | U {
    throw new Error("Method not implemented.");
  }
  reverse(): this {
    throw new Error("Method not implemented.");
  }
  set(array: ArrayLike<bigint>, offset?: number): void {
    throw new Error("Method not implemented.");
  }
  slice(start?: number, end?: number): IBigUint64Array {
    throw new Error("Method not implemented.");
  }
  some(predicate: (value: bigint, index: number, array: IBigUint64Array) => boolean, thisArg?: any): boolean {
    throw new Error("Method not implemented.");
  }
  sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this {
    throw new Error("Method not implemented.");
  }
  subarray(begin?: number, end?: number): IBigUint64Array {
    throw new Error("Method not implemented.");
  }
  toLocaleString(): string {
    throw new Error("Method not implemented.");
  }
  toString(): string {
    throw new Error("Method not implemented.");
  }
  valueOf(): IBigUint64Array {
    throw new Error("Method not implemented.");
  }
  values(): IterableIterator<bigint> {
    throw new Error("Method not implemented.");
  }
  [Symbol.iterator](): IterableIterator<bigint> {
    throw new Error("Method not implemented.");
  }
  
}




