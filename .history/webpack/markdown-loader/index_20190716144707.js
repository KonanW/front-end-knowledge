const showdown = require('showdown');
const loaderUtils = require('loader-uitls');

module.exports = function (content) {
  const options = loaderUtils.getOptions(this);
  this.cacheable();
  const converter = new showdown.Converter(options);
  content = converter.makeHtml(content);
  this.callback(null, content);
}