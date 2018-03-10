const execa = require("execa");
const fs = require('fs-extra');
const path = require('path');

module.exports = async function checkNpm() {
  try{
    const result = await execa('which', ['npm'])
    return result.stdout
  }
  catch(err){
    if(err.failed){
      return false
    } else {
      console.error(err);
    }
  }
}

module.exports()
