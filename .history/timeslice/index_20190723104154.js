//基于生成器的ts实现原理

function ts(gen) {
  console.log(typeof gen);
  if (typeof gen === 'function') gen = gen();
  if (!gen || typeof gen.next !== 'function') return;
  console.log('111');
  return function next() {
    const start = performance.now();
    let res = null;
    do {
      res = gen.next()
    } while (!res.done && performance.now() - start < 25);
    if (res.done) return;
    setTimeout(next);
  }
}

let next = ts(function* () {
  const start = performance.now()
  console.log('start', start);
  while (performance.now() - start < 1000) {
    console.log(11)
    yield
  }
  console.log('done');
});
next();