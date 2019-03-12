
/* 冒泡排序：
    最好 ： o(n),
    平均 ： o(n^2),
    最坏 ： o(n^2),
    空间 ： o(1),
    稳定性：稳定

*/

import Sort from "../sort/index";


export default class BubbleSort extends Sort {
    sort(originalArray) {
        let swapped  = false ;
        const array = [...originalArray];
        for(let i =0; i<array.length;i+=1){
            swapped = false;
            this.callbacks.visitingCallback(array[i]);
            for (let j= 0;j<array.length-i;j+=1){
                this.callbacks.visitingCallback(array[j]);
                // console.log(this.comparator.lessThan(array[j+1],array[j]));
                if(this.comparator.lessThan(array[j+1],array[j])){
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    // console.log(array);    
                    // Register the swap.
                    swapped = true;
                }
            }
            if(!swapped){
                //代表这是已经排好序的数组
                return array;
            }
        }
        return array;
    }
}