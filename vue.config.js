const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
    transpileDependencies: true
})

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
          @import "@/scss/main.scss";
        `
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                common: path.resolve(__dirname, 'node_modules/vuejs-common'),
                mainScss: path.resolve(__dirname, 'node_modules/vuejs-common/scss/main.scss'),
                translations: path.resolve(__dirname, 'src/js/translations.js')
            }
        }
    }
}
