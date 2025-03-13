const reactStrictPreset = require('react-strict-dom/babel-preset');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        'next/babel',
        {
          'preset-env': {
            targets: {
              // https://github.com/vercel/next.js/issues/57966
              // `next/babel` breaks Server Actions unless we specify the targets.
              // The below values are default values taken from Next.js documentation
              // and has been tested to work with Server Actions.
              // https://nextjs.org/docs/architecture/supported-browsers
              chrome: 64,
              edge: 79,
              firefox: 67,
              opera: 51,
              safari: 12,
            },
          },
        },
      ],
      [reactStrictPreset, { debug: true }],
    ],
  };
}; 