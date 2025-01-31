const { error, parsed: env } = require('dotenv').config();
const config = require('./web-ext-config');

if (error) {
  throw error;
}

module.exports = {
  ...config,
  run: {
    target: ['chromium'],
    chromiumBinary: env.CHROMIUM_BINARY || undefined,
    startUrl: ['chrome://extensions'],
  },
};
