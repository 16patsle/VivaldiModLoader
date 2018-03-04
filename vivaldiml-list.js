#!/usr/bin/env node
const listMods = require('./listMods');

(async function(){
  try{
    const mods = await listMods()

    console.log('\n[CSS Mods]')
    mods.css.forEach(function(mod){
      console.log(mod)
    })

    console.log('\n[JS Mods]')
    mods.js.forEach(function(mod){
      console.log(mod)
    })
  }
  catch(err){
    console.error(err)
  }

})()
