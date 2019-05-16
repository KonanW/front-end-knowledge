##### 最近再调试的时候用到端口映射，特来总结mac和widow上端口映射的方法


mac:
* 修改pf.conf :
  sudo vim /etc/pf.conf
* 增加内容 ：
  rdr on lo0 inet proto tcp from any to 127.0.0.1 port 80 -> 127.0.0.1 port 8080
* 依次执行以下命令:
  sudo pfctl -d
  sudo pfctl -f /etc/pf.conf  
  sudo pfctl -e 

window:

* 安装环境支持
    netsh interface portproxy install
* 查看已配置的“端口映射”清单
    netsh interface protproxy show v4tov4
* 添加“端口映射”
  netsh interface portproxy add v4tov4 listenaddress=192.168.222.145 listenport=15001 connectaddress=192.168.222.63 connectport=81