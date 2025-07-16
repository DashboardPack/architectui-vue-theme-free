module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
  lintOnSave: false,

  devServer: {
    port: 8080,
    stats: 'minimal'
  },

  configureWebpack: {
    resolve: {
      alias: {
        'vue': '@vue/compat'
      }
    },
    plugins: [
      new (require('webpack')).DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
        __PINIA_DEVTOOLS__: false
      })
    ]
  },

  transpileDependencies: [
    'bootstrap-vue-next',
    'vue-chartjs'
  ]
}
