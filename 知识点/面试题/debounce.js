//防抖

function debounce(fn, time) {
  let timer = null ;
  return function(argrs) {
    if (timer) clearTimeout(time);
    timer = setTimeout(() => {
      fn.apply(this,argrs);
    },time);
  }
}