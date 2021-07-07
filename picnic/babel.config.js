module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  sourceMaps: true,
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
