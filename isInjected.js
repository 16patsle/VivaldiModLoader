const jsdom = require("jsdom");
const {
    JSDOM
} = jsdom;
const fs = require('fs-extra')
const path = require('path')

module.exports = async function isInjected(modPath) {
    try {
      modPath = path.join(modPath, 'custom/browser.html')

        const dom = await JSDOM.fromFile(modPath)
        const cssInjected = dom.window.document.querySelector('link[href="custom.css"]')
        const jsInjected = dom.window.document.querySelector('script[src="custom.js"]')

        dom.window.close()

        return {
          cssInjected,
          jsInjected,
          both: cssInjected && jsInjected,
        }

    } catch (err) {
        console.error(err)
    }
}
