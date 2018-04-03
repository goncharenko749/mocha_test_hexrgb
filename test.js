const assert = require('assert');
const hex = require('./hex2rgb');

const fixtures = [
  {
    expected: [0xFF, 0xFF, 0xFF, 0xCC],
    inputs: ['#fffc', '#ffffffcc'],
  },
  {
    expected: [0x0F, 0xD1, 0xEA, 0x1F],
    inputs: ['#0fd1ea1f'],
  },
  {
    expected: [0, 0, 0, 0xFF],
    inputs: ['#000f', '#000000ff'],
  },
  {
    expected: [0xFF, 0, 0, 0xFF],
    inputs: ['#f00f', '#ff0000ff'],
  },
  {
    expected: [0xFF, 0xFF, 0xFF],
    inputs: ['#fff', '#ffffff', 'fff', 'ffffff'],
  },
];

describe('convert test', () => {
  describe('#parse()', () => {
    fixtures.forEach(({ expected, inputs }) =>
      inputs.forEach(input =>
        it(`parse ${input.padEnd(9, ' ')} as ${expected}`, () => {
          assert.deepEqual(hex(input), expected);
        })));
  });
});
