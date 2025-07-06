/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const split = path.split('/');
    const stack = [];

    for (const part of split) {
        if (part === '.' || part === '') continue
        if (part === '..') stack.pop()
        else stack.push(part)
    }

    return "/" + stack.join('/')
};