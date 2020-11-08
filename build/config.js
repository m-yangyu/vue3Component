const path = require('path');

const alias = {
    '@': process.cwd(),
    '@components': path.resolve(__dirname, '../components'),
}

module.exports = {
    alias,
}