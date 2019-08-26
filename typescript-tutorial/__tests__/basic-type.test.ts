import ts__type__ = require('../src/basic-type');

describe('Basic Types', () => {
  it('should assign boolean value(false) to boolean data type', () => {
    expect(typeof ts__type__.var__boolean).toBe('boolean');
    expect(ts__type__.var__boolean).toBe(false);
  });

  it('should assign number values to number data type', () => {
    expect(typeof ts__type__.var__decimal).toBe('number');
    expect(ts__type__.var__decimal).toBe(13);

    expect(typeof ts__type__.var__hex).toBe('number');
    expect(ts__type__.var__hex).toBe(0xf00d);

    expect(typeof ts__type__.var__binary).toBe('number');
    expect(ts__type__.var__binary).toBe(0b1010);

    expect(typeof ts__type__.var__octal).toBe('number');
    expect(ts__type__.var__octal).toBe(0o744);
  });

  it('should assign string values to string data type', () => {
    expect(typeof ts__type__.var__string).toBe('string');
  });

  /* it('should use backtick', () => {
    // TODO : redefine this( how to test whether using backtick or not)
    expect('1').toBe('1');
  });

  it('should write Array type using two ways, bracket array type, generic array type', () => {
    // TODO : redefine this( how to test whether using [], <> or not)
    expect('1').toBe('1');
  }); */
});
