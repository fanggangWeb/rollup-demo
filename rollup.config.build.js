export default {
  input: "src/main.js",
  output: [{
    file: 'dist/bundle.umd.js',
    format: 'umd',
    name: 'rollupDemo'
  }, {
    file: 'dist/bundle.es.js',
    format: 'es',
    name: 'rollupDemo'
  }]
};
