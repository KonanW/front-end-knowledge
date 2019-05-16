浏览器向用户显示页面所需的5个必要步骤：
* dom 解析html生成的数模型，
* css 包含css标签和类的树模型
* 渲染树 组合dom和css构造一个渲染树，包含页面内容以及要应用的样式信息
* 布局 计算实际页面应用的内容和大小
* 绘制 将布局信息绘制到屏幕上



###网站前端性能优化实践：
* 用户输入网址请求资源
  
  DNS域名解析 － tcp三次握手 －建立连接传输数据

  1.DNS预解析： 
     在服务端发送X-DNS-Prefetch-Control 报头
     在meta标签中添加如下：
  
      <meta http-equiv="x-dns-prefetch-control" content="off">
  2.使用缓存：
    强缓存：
       在缓存过期之前不会向服务器请求，直接读取本地缓存。
       通过响应头中设置cache-control 或者expired。
       cache-control优先级高于expired

       cache-control 取值：
       private:只有客户端可以缓存
       public:客户端和代理服务器都可以缓存
       no-cache:客户端缓存，是否使用缓存由协商缓存决定
       np-store:不缓存
       max-age:指定资源的缓存时间

    协商缓存：
       向服务器发起请求，服务器根据请求头中的参数判断资源是否过期，如果命中缓存，则返回304通知浏览器从本地缓存获取。未命中，则返回最新资源。需要配合cache-control = no-cache一起使用。

       设置方式：
       响应头中设置
       Etag 优先级大于  Last-modified

       Etag:资源的唯一标识
       IF-None-Match:请求头报文中字段，值为缓存中资源的标识。发送至服务器后，服务器接受If-None-Match与服务器保存的标识做比对，看是否命中缓存。服务端资源的唯一标识是通过算法计算得到的。需要消耗服务器资源

       Last-modified:服务器响应请求时，告诉浏览器资源的最后修改时间
       if-Modified-since:请求报文中字段，值为缓存中资源的最后修改时间。

    刷新机制：
        1.地址栏访问，会触发缓存机制
        2.F5刷新，浏览器设置max-age＝0，触发协商缓存
        3.ctrl+f5,强制从服务器上拉取。
  3.使用cdn
    静态资源使用cdn,包括js,css,image,video等。
  4.Gzip
    开启Gzip，Gzip是一种算法，可以使用复杂的归档算法压缩发送给客户端的数据。

* 页面加载及渲染过程
   页面渲染特点：  script标签会阻塞任务执行，造成页面白屏时间增长。
   解决方案：
   js放在底部加载或者异步加载。即为script标签添加defer或者async属性。这两个属性都会异步加载js.但是async属性 js加载之后会立即执行。defer会在元素解析之后再执行。
   * 合并并且压缩静态资源。
   * 使用sprite图以减少网络请求
   * 


