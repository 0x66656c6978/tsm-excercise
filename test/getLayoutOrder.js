const { getLayoutOrder } = require('..');
const assert = require('./assert');

let i = 0;
module.exports =  () => {
    let result = getLayoutOrder({'a': ['b', 'c'], 'b': ['c'], 'c': []});
    assert(result[0] === 'c' && result[1] === 'b' && result[2] === 'a', `${++i} test failed`);

    result = getLayoutOrder({'a': ['c'], 'b': ['a', 'c'], 'c': []});
    assert(result[0] === 'c' && result[1] === 'a' && result[2] === 'b', `${++i} test failed`);

    result = getLayoutOrder({'a': ['b', 'c'], 'b': ['a'], 'c': []});
    assert(result.length === 0, `${++i} test failed`);
};