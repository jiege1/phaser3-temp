const IS_DEV = process.env.NODE_ENV !== 'production';
const rootSrc = __dirname + '/src';

module.exports = (config) => {

  config = {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        components: rootSrc + '/components',
        game: rootSrc + '/game',
        assets: rootSrc + '/assets',
      }
    },
  };

  return config;
};