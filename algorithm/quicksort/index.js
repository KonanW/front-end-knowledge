/* 快速排序 */

import Sort from "../sort/index";

export default class QuickSort extends Sort {
    sort(originData) {
        const array = [...originData];
        if(array.length <= 1) {
            return array;
        }

        const left = [];
        const right = [];
        const privo = array.shift(); // 取数组的第一个元素
        const center = [privo];
        while(array.length) {
            const current = array.shift();

            if(this.comparator.equal(current,privo)){
                center.push(current)
            }else if(this.comparator.lessThan(current,privo)){
                left.push(current);
            }else {
                right.push(current)
            }

        }

        const leftSorted = this.sort(left);
        const rightSorted = this.sort(right);
        return leftSorted.concat(center,rightSorted);
    }
}