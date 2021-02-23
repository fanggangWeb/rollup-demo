import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

export default {
  input: "src/main.js",
  output: [{
    file: 'dist/bundle.umd.js',
    format: 'umd',
    name: 'bundleName'
  }, {
    file: 'dist/bundle.es.js',
    format: 'es',
    name: 'bundleName'
  }],
  plugins: [
    livereload(),
    serve({
      open: true,
      port: 8888,
      contentBase: './',
    })
  ]
};
