const path = require("path");
const monorepoRoot = path.resolve(__dirname, '../../');

module.exports = {
    plugins: {
        "postcss-react-strict-dom": {
            include: [
                "src/**/*.{js,jsx,mjs,ts,tsx}",
                path.resolve(monorepoRoot, "packages/ui/src/**/*.{js,jsx,ts,tsx}")
            ],
            rootDir: monorepoRoot,
            debug: true
        },
        autoprefixer: {}
    }
};
