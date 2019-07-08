### linux node 安装


* 下载linux node 安装包 并且部署到linux服务器
* 解压文件
      
      tail zxvf 文件名
* 这时候目录还在环境变量中，需要通过软链接的形式将node和npm链接到系统默认的PATH目录下
   
   ln -s /root/wm/nodejs/bin/node /usr/local/bin/node
   ln -s /root/wm/nodejs/bin/npm /usr/local/bin/npm