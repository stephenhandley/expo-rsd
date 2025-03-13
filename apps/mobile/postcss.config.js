const path = require('path');

module.exports = {
    plugins: {
        'postcss-react-strict-dom': {
            include: [
                // Include source files to watch for style changes
                'src/**/*.{js,jsx,mjs,ts,tsx}',
                path.resolve(__dirname, '../../packages/ui/src/**/*.{js,jsx,ts,tsx}')
            ]
        },
        autoprefixer: {}
    }
};
