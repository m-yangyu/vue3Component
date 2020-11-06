const path = require('path');

const alias = {
    '@': process.cwd(),
    '@packages': path.resolve(__dirname, '../packages'),
}

module.exports = {
    alias,
}