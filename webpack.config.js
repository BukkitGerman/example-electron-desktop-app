// webpack.config.js
module.exports = [
    {
      mode: 'development',
      entry: './main.ts',
      target: 'electron-main',
      module: {
        rules: [{
          test: /\.ts$/,
          include: /src/,
          use: [{ loader: 'ts-loader' }]
        }]
      },
      output: {
        path: __dirname + '/',
        filename: 'main.js'
      }
    }
  ];