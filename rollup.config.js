export default {
  input: "src/main.js", // 要打包文件的文件源路径、程序的主入口
  output: { // 文件输出配置
    file: 'dist/bundle.umd.js', // 打包后生产的文件位置及文件名
    /**
     * format:文件的输出格式
     * amd: 异步模块定义，用于像RequestJS这样的模块加载器。
     * cjs: CommonJS,适用于Node或Browserify/webpack。
     * es: 将软件包保存为ES模块文件。es: 将软件包保存为ES模块文件。
     * iife: 一个自动执行的功能，适合作为script标签这样的，只能在浏览器中运行。
     * umd: 通用模块定义，以amd、cjs和iife为一体。
     *  
    **/
    format: 'umd',
    name: 'bundleName' // 包的全局变量名称
  }
};




// 使用相同的输入构建不同的包，可为每个数输入提供一组输出选项
// export default [{
//   input: 'main-a.js',
//   output: {
//     file: 'dist/bundle-a.js',
//     format: 'cjs'
//   }
// }, {
//   input: 'main-b.js',
//   output: [
//     {
//       file: 'dist/bundle-b1.js',
//       format: 'cjs'
//     },
//     {
//       file: 'dist/bundle-b2.js',
//       format: 'es'
//     }
//   ]
// }];