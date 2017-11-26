module.exports = function (extractSass) {
    return {
        test: /\.scss$/, // Check for sass or scss file names
        use: extractSass.extract({
            fallback: 'style-loader',
            use: ['css-loader', {
                    loader: 'sass-loader',
                    options: {
                        includePaths: [
                            'src',
                        ],
                    },
                },
            ],
        }),
    };
};
