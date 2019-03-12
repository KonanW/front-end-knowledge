/* 重复引用 chunk1 应用chunk2 */


require("./chunk2");
var chunk1=1;
exports.chunk1=chunk1;


