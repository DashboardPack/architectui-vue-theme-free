const { createServer } = require('vite')
const vue = require('@vitejs/plugin-vue')
const path = require('path')

async function startServer() {
  const server = await createServer({
    plugins: [vue()],
    root: path.resolve(__dirname),
    server: {
      port: 8080,
      host: '0.0.0.0'
    },
    resolve: {
      alias: {
        'vue': '@vue/compat'
      }
    },
    define: {
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
      __PINIA_DEVTOOLS__: false
    }
  })

  await server.listen()
  console.log('Development server started on http://localhost:8080')
}

startServer().catch(console.error)
