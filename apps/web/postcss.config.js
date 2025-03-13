module.exports = {
    plugins: {
        'postcss-react-strict-dom': {
            include: [
                'app/**/*.{js,jsx,ts,tsx}',
                '../../packages/ui/src/**/*.{js,jsx,ts,tsx}'
            ],

        },
        autoprefixer: {},
    },
}