const path = require('path');

const alias = {
    '@packages': path.resolve(__dirname, '../packages'),
}

module.exports = {
    alias,
}