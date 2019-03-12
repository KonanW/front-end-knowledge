import Sort from "../sort/index";

export default class InsertSort extends Sort {
    sort(originalArray) {
        const array = [...originalArray];
        for(let i = 0 ;i< array.length; i+= 1) {
            let currentIndex = i ;
            while( 
                array[currentIndex - 1] !==undefined
                && this.comparator.lessThan(array[currentIndex],array[currentIndex-1])
            ){
                 // Swap the elements.
                // const tmp = array[currentIndex - 1];
                // array[currentIndex - 1] = array[currentIndex];
                // array[currentIndex] = tmp;
               [ array[currentIndex-1],array [currentIndex] ]= [array [currentIndex], array [currentIndex-1 ]];
                // Shift current index left.
                currentIndex -= 1;
            }
        }
        return array;
    }
}