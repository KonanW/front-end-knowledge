import BubbleSort from "../BubbleSort/index";
import InsertSort from "../insertSort/index";
import QuickSort from "../quicksort/index";

var test = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// var test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log('------ bubblesort--------');
const bubbleSort = new BubbleSort();
const insertSort = new InsertSort();
const quickSort = new QuickSort();
var result = bubbleSort.sort(test);
var Insert = insertSort.sort(test);
var quick = quickSort.sort(test);


console.log('result',result);

console.log('------ Insertsort--------');
console.log('insert',Insert);

console.log('-----quicksort----------');
console.log('quick',quick);

