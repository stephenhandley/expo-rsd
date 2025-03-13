// Learn more https://docs.expo.dev/guides/monorepos

const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

// Find the project and workspace directories
const projectRoot = __dirname;
const monorepoRoot = path.resolve(__dirname, '../../');

const config = getDefaultConfig(projectRoot);

config.watchFolders = [monorepoRoot];
config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, 'node_modules'),
    path.resolve(monorepoRoot, 'node_modules'),
];

// Needed for react-strict-dom 
config.resolver.unstable_enablePackageExports = true;
config.resolver.unstable_conditionNames = ["require", "default", "browser"];
config.resolver.disableHierarchicalLookup = true;

module.exports = config;