export class UUID {

  private readonly _bytes: Uint8Array;

  constructor(bytes: Uint8Array) {
    if (bytes.length !== 16) {
      throw new Error('UUID byte array must be of length 16');
    }
    this._bytes = bytes;
  }

  static randomUUID(): UUID {
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);
    return new UUID(array);
  }

  static fromString(input: string): UUID {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    if (!uuidRegex.test(input)) {
      throw new Error('Invalid UUID string');
    }

    const bytes = new Uint8Array(16);
    const hexChars = input.replace(/-/g, '');
    for (let i = 0; i < 32; i += 2) {
      bytes[i / 2] = parseInt(hexChars.substring(i, i + 2), 16);
    }

    return new UUID(bytes);
  }

  toString(): string {
    const byteStrings = Array.from(this._bytes, (byte) => byte.toString(16).padStart(2, "0"));
    const segments = [
      byteStrings.slice(0, 4).join(''),
      byteStrings.slice(4, 6).join(''),
      byteStrings.slice(6, 8).join(''),
      byteStrings.slice(8, 10).join(''),
      byteStrings.slice(10).join('')
    ];
    return segments.join('-');
  }

  valueOf(): string {
    return this.toString();
  }

}
