// const PrerenderSPAPlugin = require('prerender-spa-plugin');

// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

// const path = require('path');

// module.exports = {

//   publicPath:'/',
  
//   configureWebpack: config => {

//    config.entry = ['babel-polyfill', './src/main.js']

//   if (process.env.NODE_ENV === 'production') {

//      config.plugins.push(

//        new PrerenderSPAPlugin({

//          staticDir: path.join(__dirname, '../el-table-selection/dist'),

//          indexPath: path.join(__dirname, '../el-table-selection/dist', 'index.html'),

//          routes: ['/contact',],

//          renderer: new Renderer({

//            inject: {

//              foo: 'bar'

//            },

//            headless: false,

//            // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。

//            renderAfterDocumentEvent: 'render-event'

//          })

//        })

//      )

//    }

//   },

// }
