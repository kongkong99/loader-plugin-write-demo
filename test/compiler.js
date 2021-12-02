import path from 'path';
import webpack from 'webpack';
import memoryfs from 'memory-fs';
import FileListPlugin from '../src/plugin';

export default (fixture, options = {}) => {
  const compiler = webpack({
    context: __dirname,
    entry: fixture,
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [{
        test: /\.txt$/,
        use: {
          loader: path.resolve(__dirname, '../src/loader.js'),
          options: {
            name: 'Alice',
            age: '18'
          }
        }
      }]
    },
    plugins: [
      new FileListPlugin()
    ]
  });

  // compiler.outputFileSystem = new memoryfs(); // 输出结果存入内容中

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);

      resolve(stats);
    });
  });
};