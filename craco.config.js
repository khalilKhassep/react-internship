const path = require('path');

module.exports = {
  webpack: {
    alias: {
      "@covid": path.resolve(__dirname, 'src/components/covid/components/')
    }
  }
};
