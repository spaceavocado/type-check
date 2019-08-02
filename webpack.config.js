const libraryName = 'type-check';

module.exports = (env, options) => {
  return {
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    devtool: '',
    output: {
      path: __dirname + '/lib',
      filename: libraryName + '.js',
      library: libraryName,
      libraryTarget: 'umd',
      globalObject: 'this',
    },
  };
};
