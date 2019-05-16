function quickSort(array ,q ,r){
    if(q<r) {
        let  p = partition(array,q,r);
        quickSort(array,q,p-1);
        quickSort(array,p+1,r);
    }
} 


function partition(array,q,r){
    let x = a[r];  //标志为
    let i = q-1;
    for(let j=q;j<r;j++){
        if(x >= a[j]) {
            i++;
            [a[i],a[j]] = [a[j],a[i]];
        }
    }
    [a[r],a[i+1]] = [a[i+1],a[r]];
    return i+1;
}


let a = [11,2,42,1,42,4,6,3];

quickSort(a,0,7);

console.log(a);