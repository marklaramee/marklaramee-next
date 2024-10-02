const path = require('path');

/*
TODO: not working
https://github.com/vercel/next.js/discussions/12771
*/

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig



