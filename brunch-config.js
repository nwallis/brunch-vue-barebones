module.exports = {
    files: {
        javascripts: {
            joinTo: {
                'vendor.js': /^(?!app)/,
                'app.js': /^app/
            }
        },
        templates: {
            joinTo: 'app.js'
        },
        stylesheets: {
            joinTo: {
                'css/prototyping.min.css': 'app/scss/main.scss',
            }
        }
    },
    npm: {
        globals: {
            jQuery: 'jquery',
            $: 'jquery',
            Popper: 'popper.js'
        },
    },
    plugins: {
        babel: {
            presets: ['es2015']
        },
        sass: {
            options: {
                includePaths: [
                    "node_modules/bootstrap/scss/"
                ],
                precision: 8
            }
        },
    }
}
