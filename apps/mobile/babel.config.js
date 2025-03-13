const reactStrictBabelPreset = require('react-strict-dom/babel-preset');

function getPlatform(caller) {
  // This information is populated by Expo
  return caller && caller.platform;
}

function getIsDev(caller) {
  // This information is populated by Expo
  if (caller?.isDev != null) return caller.isDev;
  // https://babeljs.io/docs/options#envname
  return (
    process.env.BABEL_ENV === 'development' ||
    process.env.NODE_ENV === 'development'
  );
}

module.exports = function (api) {
  // If not using Expo, set these values manually or by other means
  const platform = api.caller(getPlatform);
  const dev = api.caller(getIsDev);

  console.log(`Platform is ${platform} and dev is ${dev}`);

  return {
    plugins: [],
    presets: [
      'babel-preset-expo',
      [reactStrictBabelPreset, {
        debug: dev,
        dev,
        platform,
        rootDir: process.cwd()
      }],
    ]
  };
};