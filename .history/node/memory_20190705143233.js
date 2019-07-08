const format = function(bytes) {
  return (bytes / 1024 /1024).toFixed(2) + 'MB';
}

const print = function() {
  const memoryUsage = process.memoryUsage();

  console.log(JSON.stringify({
    rss: format(memoryUsage.rss),
    heapTotal: format(memoryUsage.heapTotal),
    heapUsed: format(memoryUsage.heapUsed),
    external: format(memoryUsage.external),
  }))
}