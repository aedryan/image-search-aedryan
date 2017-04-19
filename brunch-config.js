module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'app.js': /app\/js\//,
        'libraries.js': /node_modules\//
      }
    },
    stylesheets: {
      joinTo: {
        'app.css': /app\/css\//
      }
    },
    templates: {
      joinTo: {
        'templates.js': /app\/views\//
      }
    }
  },
  paths: {
    watched: ['app']
  },
  plugins: {
    babel: {
      ignore: [/node_modules/]
    },
    pug: {
      globals: ['App']
    }
  }
}