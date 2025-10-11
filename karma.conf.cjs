// karma.conf.cjs
module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'src/test/setupTests.js',
      'src/test/**/*.spec.jsx',
      // Agregar archivos estáticos de la carpeta public
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
            use: ['style-loader', 'css-loader'],
          },
          // Agregar regla para archivos de imagen
          {
            test: /\.(png|jpg|jpeg|gif|webp|svg)$/i,
            type: 'asset/resource'
          }
        ],
      },
      resolve: {
        extensions: ['.js', '.jsx'],
      },
    },
    reporters: ['progress', 'kjhtml', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
    },
    browsers: ['ChromeHeadless'],
    singleRun: true,
    restartOnFileChange: true,
    // AGREGAR ESTA SECCIÓN DE PROXIES
    proxies: {
      '/img/': '/base/public/img/'
    },
    plugins: [
      'karma-jasmine',
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-jasmine-html-reporter'
    ]
  });
};