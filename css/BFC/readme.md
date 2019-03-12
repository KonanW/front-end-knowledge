### BFC

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