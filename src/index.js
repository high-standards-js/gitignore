const base = require('@high-standards-js/base');

function add(pattern) {
    const lines = base.getFile('.gitignore', true).toString().split('\n');
    if (!patternExists(lines, pattern)) {
        lines.push(pattern);
    }
}   

function patternExists(lines, pattern) {
    return lines.find((singleLine) => {
        return singleLine.trim() === pattern.trim();
    })
}

module.exports = {
    add
}