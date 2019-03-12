
// 记录dom节点的类型，属性 和子节点
function Element(tagName,props,children) {
    this.tagName = tagName;
    this.props = props;
    this.children = children;
}

Element.prototype.render = function() {
    var el = document.createElement(this.tagName);
    var props = this.props;
    for(var propName in props) {
        var propValue = props[propName];
        el.setAttribute(propName,propValue);
    }

    var children = this.children || [];
    children.forEach(function(child){
       //如果子节点也是虚拟dom 则递归构建， 如果时字符串，只构建文本节点
        var childE1 = (child instanceof Element) ?child.render() : document.createTextNode(child);
        el.appendChild(childE1);
    })
    return el;
}


module.exports = function (tagName,props,children) {
    return new Element(tagName,props,children);
}