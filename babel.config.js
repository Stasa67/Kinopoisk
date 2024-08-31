module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
},
{
  test: /\.less$/,
  use: [
    'vue-style-loader',
    'css-loader',
    'less-loader'
  ]
}
