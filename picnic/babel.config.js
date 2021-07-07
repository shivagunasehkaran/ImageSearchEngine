module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    'module:metro-react-native-babel-preset',
  ],
  env: {
    production: {
      plugins: ['@babel/plugin-transform-runtime'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@components': './src/components',
          '@views': './src/views',
          '@routes': './src/routes',
          '@assets': './src/assets',
          '@containers': './src/containers',
          '@services': './src/services',
          '@utills': './src/utills',
        },
      },
    ],
  ],
  retainLines: true,
};
