
window.lg = log4web.newLogger();
window.ui = window["log4web-ui-mobile"];
window.lg.config({
  level: log4web.LogLevel.TRACE,
  // level: log4web.LogLevel.ERROR,
  defaultStore: {
    enable: true,
  },
  defaultFanner: {
    enable: false
  },
  'log4web-ui-mobile': {}
})
window.lg.use(ui.Core); //使用默认的输出插件(console/alert)

window.lg.setSpinBackColor('red');
window.lg.showFloatSpin();

document.getElementById("body").addEventListener("touchstart",function(e){
  handleClick(e);
}, false);
var count = 0;
function handleClick(e) {
  count++;
  window.lg.trace('canvas click' + e.touches.length+' '+count );
}