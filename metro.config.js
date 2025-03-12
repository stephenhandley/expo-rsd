// Learn more https://docs.expo.dev/guides/monorepos
const { getDefaultConfig } = require('expo/metro-config');

// Find the project and workspace directories
const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);
// 1. Enable Metro support for symlinks and package exports
config.resolver.unstable_enablePackageExports = true;

// https://github.com/facebook/react-strict-dom/issues/281#issuecomment-2717357628
config.resolver.unstable_conditionNames = ["require", "default", "browser"]

// 2. Only for npm monorepos: force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
// config.resolver.disableHierarchicalLookup = true;


module.exports = config;