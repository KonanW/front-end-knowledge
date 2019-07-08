const format = function(bytes) {
  return (bytes / 1024 /1024).toFixed(2) + 'MB';
}



/**
 * rss: RAM 中保存的进程占用的内存部分，包括代码本身、栈、堆
 * headTotal: 堆中总共申请到的内存量
 * HeadUsed: 堆中目前用到的内存量
 * external: v8引擎内部的c++对象占用的内存。
 */
const print = function() {
  const memoryUsage = process.memoryUsage();

  console.log(JSON.stringify({
    rss: format(memoryUsage.rss),
    heapTotal: format(memoryUsage.heapTotal),
    heapUsed: format(memoryUsage.heapUsed),
    external: format(memoryUsage.external),
  }))
}

function Quantity(num) {
  if(num) {
    return new Array(num * 1024 * 1024);
  }
  return num;
}

function Fruit(name, quantity) {
  this.name = name;
  this.quantity = new Quantity(quantity);
}

let apple = new Fruit('apple');
print();
let banana = new Fruit('banana', 20);
print();
banana = null;
global.gc();
print();