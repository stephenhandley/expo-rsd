Created the project by doing the following
1. This [Expo blog post](https://expo.dev/changelog/react-native-78) on support for React Native 0.78
```
npx create-expo-app expo-rsd --template blank@canary
```
2. Setting `legacy-peer-deps = true` in .npmrc
3. Installing web deps 
```
npx expo install react-dom react-native-web @expo/metro-runtime
```

At this point, the app runs and renders as expected via `npm run web`. This is where the [ad3ce6](https://github.com/stephenhandley/expo-rsd/commit/ad3ce6fe6ef912e02a85d0bfb7b46c423eadc5ce) commit is at. Branch and PR for `rsd` added these additional steps.

4. Following processes in React Strict Dom docs for [installation](https://facebook.github.io/react-strict-dom/learn/installation/) and [environment setup](https://facebook.github.io/react-strict-dom/learn/setup/)
5. Installing autoprefixer
```
npm install --save-dev autoprefixer
```

At this point the app fails to load `_interop
```
HMRClient.ts:11 Uncaught TypeError: _interopRequireDefault is not a function
    at HMRClient.ts:11:1
    at loadModuleImplementation (require.js:277:5)
    at guardedLoadModule (require.js:184:12)
    at metroRequire (require.js:92:7)
    at setupHMR.ts:1:1
    at loadModuleImplementation (require.js:277:5)
    at guardedLoadModule (require.js:184:12)
    at metroRequire (require.js:92:7)
    at effects.ts:8:5
    at loadModuleImplementation (require.js:277:5)
```

If I comment out this line on `metro.config.js` the app will render, but unsuprisingly importing from react-strict-dom will fail.
```
config.resolver.unstable_enablePackageExports = true;
```



