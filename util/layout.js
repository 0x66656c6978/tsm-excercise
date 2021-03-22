/**
 * Take in a map of keys and values which represent keys that should be loaded first.
 * Return a list of keys in an order that satisfies the dependency constraints.
 * 
 * Example
 * 
 * getLayoutOrder({'a': ['b', "c'], 'b': ['c'], 'c': []})
 * => ['c', 'b', 'a']
 * 
 * getLayoutOrder({'a': ['b', 'c'], 'b': ['a'], 'c': []})
 * => []
 * 
 * @param {{[name: string]: string[]}} dependencies 
 * @returns {string[]}
 */
const getLayoutOrder = (dependencies = {}) => {
    const dependencies_ = dependencies; // we do not want to mutate the incoming object
    const loadOrder = [];

    while (Object.keys(dependencies_).length) {
        // find the next key that has no further dependencies
        const nextDependencyToRemove = getFirstEntryWithoutDependencies(dependencies_);
        if (nextDependencyToRemove === undefined) {
            // If we can't find a key that has an empty list of dependencies that means we have cyclic dependencies.
            return [];
        }

        // remove the key as dependency from all other keys
        for (let key in dependencies_) {
            if (dependencies_[key].find(value => value === nextDependencyToRemove)) {
                dependencies_[key] = dependencies_[key].filter(value => value !== nextDependencyToRemove);
            }
        }

        // remove the key itself
        delete dependencies_[nextDependencyToRemove];

        // add the key as the next item to load
        loadOrder.push(nextDependencyToRemove);
    }
    return loadOrder;
}

/**
 * Return the first key that has no dependencies or undefined
 * 
 * @param {{[name: string]: string[]}} dependencies 
 * @returns {string|undefined}
 */
const getFirstEntryWithoutDependencies = (dependencies = {}) => {
    return Object.keys(dependencies).find(k => dependencies[k].length === 0);
}

module.exports = { getLayoutOrder };