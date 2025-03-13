// Learn more https://docs.expo.dev/guides/monorepos
const { getDefaultConfig } = require('expo/metro-config');

// Find the project and workspace directories
const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

// Need for react-strict-dom 
config.resolver.unstable_enablePackageExports = true;
config.resolver.unstable_conditionNames = ["require", "default", "browser"]

module.exports = config;