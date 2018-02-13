module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'custom.js': 'mods/**/*.js'
      }
    },
    stylesheets: {
      joinTo: {
        'custom.css': 'mods/**/*.css'
      }
    },
  },
  paths: {
    public: 'custom',
    watched: ['mods']
  },
  modules: {
    wrapper: false,
    definition: false,
  },
  npm: {
    enabled: false
  }
}