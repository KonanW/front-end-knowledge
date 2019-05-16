### 虚拟DOM
vue将dom抽象成了一个以javascript对象为节点的虚拟dom树，以Vnode节点模拟真实的dom.
可以对这颗抽象树进行增，删，改，查。在这个过程中并不会影响真的dom.最后通过diff算法对dom更新


### 虚拟dom核心：

通过javascript对象构建一个dom树 ，数据状态更新后，修改该javascript对象，通过前后的差异计算出需要更新的dom元素，
最后在更新dom.

比较Vnode数据这个操作是通过patch进行的，只会同层级进行比较，不会跨层级比较