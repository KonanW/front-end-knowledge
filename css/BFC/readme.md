### BFC
定义： 浮动元素，绝对定位元素，非块级盒子的块级容器（inline-block,table-cells,table-captions）,以及overflow 值不为‘visible’的块级盒子。都会为他们的内容创建新的BFC。
传送门：<https://www.w3cplus.com/css/understanding-bfc-and-margin-collapse.html>

##盒模型

IE： width ＝ content ＋ border ＋ padding 

标准模型 width ＝ content

如何设置：  
 ie模型：  border-sizing  : border-box

 标准模型  border-sizing: content-box

 ## 边距重叠

 两个或者多个盒子（相邻或者嵌套）的相邻边界重合在一起而行程一个单一边界。

 ## BFC
 BFC能够解决边距重叠的问题，以下情况能够形成BFC：
 * float不为 none；
 * overflow的值部位visible
 * display的值未inline-block,table-cell,table-caption;
 * position 的值为absolute或fixed