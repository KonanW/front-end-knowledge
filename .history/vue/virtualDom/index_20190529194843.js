/* 
  virtual Dom 算法步骤：
  1.用javascript对象结构表示dom树的结构；然后用这个树结构构建一个真正的Dom树，插到文档中
  2.当状态更新的时候，重新构造一颗新的对象树，去和久的dom树进行比较，记录两科树的差异。
  3.把2颗的记录差异应用发哦步骤1所构建的正真的dom树上，视图就更新了。
*/

/**
 *  对于 以下dom结构
 *  <div id="app">
 *      <h1>header</h1>
 *      <p>footer</p>
 *   </div>
 */

 var element = {
   tagName:' div',
   el:null,
   props: {
     id:'app'
   },
   children:[
     {tagName:'h1',props:null,children:['header']},
     {tagName:'p',props:null,children:['footer']}
   ]
 }

 /**
  * 在vue中  数据驱动视图，数据改变时  会重新生成virtual Dom,然后将新旧vitrual dom 做比较
  * 这里新旧Virtual Dom只会在同级的元素进行对比，利用递归实现深度优先遍历
  */