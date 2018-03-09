const jsdom = require("jsdom");
const {
  JSDOM
} = jsdom;
const fs = require('fs-extra')
const path = require('path')

module.exports = async function injectCustom(modPath) {
  try {
    modPath = path.join(modPath, 'custom/browser.html')

    const dom = await JSDOM.fromFile(modPath)

    const customCss = dom.window.document.createElement('link')
    customCss.setAttribute('rel', 'stylesheet')
    customCss.setAttribute('href', 'custom.css')
    dom.window.document.head.appendChild(customCss)
    console.log('Injected custom CSS into browser.html');

    const customJs = dom.window.document.createElement('script')
    customJs.setAttribute('src', 'custom.js')
    dom.window.document.body.appendChild(customJs)
    console.log('Injected custom JS into browser.html');

    const html = dom.serialize()

    fs.writeFile(modPath, html)

    dom.window.close()
  } catch (err) {
    console.error(err)
  }
}
