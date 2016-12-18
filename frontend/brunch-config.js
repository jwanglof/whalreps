exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^node_modules/,
        'main.js': /^app/
      },
      order: {
        after: [/\.html$/, /\.css$/]
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    },
    templates: {
      joinTo: 'main.js'
    }
  },
  plugins: {
    inlineCss: {
      html: true,
      passthrough: [/^node_modules/, 'app/global.scss']
    },
    sass: {
      sourceMapEmbed: true,
      options: {
        includePaths: ['node_modules/bootstrap/scss']
      }
    }
  },
  server: {
    hostname: '0.0.0.0'
  }
};
