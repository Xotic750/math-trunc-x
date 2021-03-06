<a
  href="https://travis-ci.org/Xotic750/math-trunc-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/math-trunc-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/math-trunc-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/math-trunc-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/math-trunc-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/math-trunc-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/math-trunc-x"
  title="npm version">
<img src="https://badge.fury.io/js/math-trunc-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/math-trunc-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/math-trunc-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/math-trunc-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/math-trunc-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/math-trunc-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/math-trunc-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_math-trunc-x"></a>

## math-trunc-x

Get the integer part of a number.

<a name="exp_module_math-trunc-x--module.exports"></a>

### `module.exports(value)` ⇒ <code>number</code> ⏏

This method returns the integer part of a number by removing any fractional digits.

**Kind**: Exported function  
**Returns**: <code>number</code> - The truncated number.

| Param | Type                | Default | Description                |
| ----- | ------------------- | ------- | -------------------------- |
| value | <code>number</code> |         | The number to be truncate. |

**Example**

```js
import mathTrunc from 'math-trunc-x';

mathTrunc(13.37); // 13
mathTrunc(42.84); // 42
mathTrunc(0.123); //  0
mathTrunc(-0.123); // -0
mathTrunc('-1.123'); // -1
mathTrunc(NaN); // NaN
mathTrunc('foo'); // NaN
mathTrunc(); // NaN
```
