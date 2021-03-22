const { formatGold } = require('..');
const assert = require('./assert');

let i = 0;
module.exports = () => {
    assert(formatGold(99) === '99c', `${++i} test failed`);
    assert(formatGold(100) === '1s', `${++i} test failed`);
    assert(formatGold(10010) === '1g 10c', `${++i} test failed`);
    assert(formatGold(10100) === '1g 1s', `${++i} test failed`);
    assert(formatGold(100112) === '10g 1s 12c', `${++i} test failed`);
};