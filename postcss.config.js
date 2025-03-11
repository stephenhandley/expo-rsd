module.exports = {
    plugins: {
        'postcss-react-strict-dom': {
            include: [
                // Include source files to watch for style changes
                'src/**/*.{js,jsx,mjs,ts,tsx}',
                // List any installed node_modules that include UI built with React Strict DOM
                //   'node_modules/<package-name>/*.js'
            ]
        },
        autoprefixer: {}
    }
};
