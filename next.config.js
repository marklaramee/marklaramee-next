const path = require('path');

/*
TODO: not working
https://github.com/vercel/next.js/discussions/12771
*/

const nextConfig = {
  output: 'export',  // <=== enables static exports
  basePath: '/marklaramee-next',
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig



