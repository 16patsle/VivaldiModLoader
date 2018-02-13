const npmRunScript = require("npm-run-script");

module.exports = function buildFiles() {
    return new Promise((resolve, reject) => {
        const child = npmRunScript('brunch b -p');
        child.once('error', (error) => {
            //console.trace(error);
            //process.exit(1);
            reject(error)
        });
        child.once('exit', (exitCode) => {
            //console.log('Brunch exited with code ', exitCode);
            //process.exit(exitCode);
            console.log('Mod files built, exited with code ' + exitCode)
            resolve(exitCode)
        });
    })
}