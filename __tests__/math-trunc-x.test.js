import mathTrunc from '../src/math-trunc-x';

describe('mathTrunc', function() {
  it('basic', function() {
    expect.assertions(8);
    expect(mathTrunc(13.37)).toBe(13);
    expect(mathTrunc(42.84)).toBe(42);
    expect(Object.is(mathTrunc(0.123), 0)).toBe(true);
    expect(Object.is(mathTrunc(-0.123), -0)).toBe(true);
    expect(mathTrunc('-1.123')).toBe(-1);
    expect(Number.isNaN(mathTrunc(NaN))).toBe(true);
    expect(Number.isNaN(mathTrunc('foo'))).toBe(true);
    expect(Number.isNaN(mathTrunc())).toBe(true);
  });
});
