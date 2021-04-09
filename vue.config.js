module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader(require.resolve('vue-loader-v16'))
      .tap((options) => {
        options.compilerOptions = {
          ...(options.compilerOptions || {}),
          isCustomElement: (tag) => /^chat-/.test(tag),
        };
        return options;
      });
  },
};
