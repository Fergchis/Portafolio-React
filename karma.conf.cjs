// Eliminar completamente el warning de deprecación
const originalEmit = process.emit;
process.emit = function (name, data, ...args) {
  if (name === 'warning' && data.name === 'DeprecationWarning') {
    return false; // Suprime completamente el warning
  }
  return originalEmit.apply(process, arguments);
};

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'src/test/setupTests.js',
      'src/test/**/*.spec.jsx',
      {
        pattern: 'public/**/*',
        included: false,
        served: true,
        watched: false
      }
    ],
    preprocessors: {
        'src/test/setupTests.js': ['webpack'],
        'src/test/**/*.spec.jsx': ['webpack']
    },
    webpack: {
      mode: 'development',
      cache: true,
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react'],
                },
              },
            ],
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  url: {
                    filter: (url, resourcePath) => {
                      if (url.includes('/fonts/')) {
                        return false;
                      }
                      return true;
                    },
                  },
                },
              },
            ],
          },
          {
            test: /\.(png|jpg|jpeg|gif|webp|svg)$/i,
            type: 'asset/resource'
          },
          {
            test: /\.(woff|woff2|ttf|eot)$/i,
            type: 'asset/resource',
            generator: {
              filename: 'fonts/[hash][ext][query]'
            }
          }
        ],
      },
      resolve: {
        extensions: ['.js', '.jsx'],
      },
    },
    reporters: ['progress', 'kjhtml'],
    browsers: ['ChromeHeadless'],
    singleRun: true,
    restartOnFileChange: true,
    captureTimeout: 60000,
    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 3,
    browserNoActivityTimeout: 60000,
    proxies: {
      '/img/': '/base/public/img/',
      '/fonts/': '/base/public/fonts/'
    },
    plugins: [
      'karma-jasmine',
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter'
    ]
  });
};