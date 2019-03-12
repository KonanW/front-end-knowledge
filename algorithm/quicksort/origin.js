/* 
        quicksort (a,p,r)
            if(p<r)
                q=partition(a,p,r)
                quicksort(a,p,q-1)
                quicksort(a,q+1,r)



        partition(a,p,r)
            x=a[r]
            i=p-1
            for j=p to r-1
                if( x >= a[j])
                    i=i+1
                    exchange a[r] a[j]
            exchange a[r] a[i+1]
            retturn i+1
 */


 /* 
    @param a : 原始数组
    @param p : 起始位置
    @param r : 终止位置
 */

 function quicksort(a, p ,r) {
     if(p < r ){
         let q= partition(a,p,r);
         console.log(q);
         quicksort(a,p,q-1);
         quicksort(a,q+1,r);
     }
 }

 function exchange(a,b){
     let i = a;
     a = b;
     b = i;
 }

 function partition(a,p,r) {
     let x = a[r];
     let i = p-1;
     for(let j =p ;j<r;j++){
        if( x >= a[j]){
            i++;
            [a[i],a[j]]=[a[j],a[i]]
            // exchange(a[i],a[j])
        }
    }
    [a[r],a[i+1]]=[a[i+1],a[r]]
    // exchange(a[r],a[i+1]);
    // let flag = a[r];
    // a[r] = a[i+1];
    // a[i+1] = flag;
    console.log(a)
    return i+1;
 }

 let a = [20,19,18,17,16,15,5,4,3,2,1];
// let a = [1,2,3,4,5,6,7,8,9,10,11];


 quicksort(a,0,10);
 console.log(a);