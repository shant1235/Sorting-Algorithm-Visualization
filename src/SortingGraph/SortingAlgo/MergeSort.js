export function mergeSort (list,speed){
    arr = list.slice();
    animations = [];
    
    var i;
    
    const barsTotal = document.getElementsByClassName('array-node');
    sort(0, arr.length-1);
    console.log(arr);

    for(i = 0; i < animations.length;i++){
        const [bar1,bar2,bar1Value,bar2Value] = animations[i];
        const bar1Style = barsTotal[bar1].style;
        const bar2Style = barsTotal[bar2].style;
        
        setTimeout(() => {
            
            setTimeout(() => {   
                bar1Style.height = bar1Value + 'px' ;
                bar2Style.height = bar2Value + 'px' ; 
    
                bar1Style.backgroundColor = '#0052f5';
                bar2Style.backgroundColor = '#0052f5';
               
            },  1)
           bar1Style.backgroundColor = 'red';
        
  
        }, i * speed)    
    }
    return arr;
}
var arr = [];
var animations = [];
function  merge(l, m, r) 
{ 
    var i, j, k; 
    var n1 = m - l + 1; 
    var n2 =  r - m; 
  
    /* create temp arrays */
    var L = [];
    var R = []; 
  
    /* Copy data to temp arrays L[] and R[] */
    for (i = 0; i < n1; i++){
        
        L[i] = arr[l + i]; 
    } 
    for (j = 0; j < n2; j++){ 
        R[j] = arr[m + 1+ j]; 
    }
    /* Merge the temp arrays back into arr[l..r]*/
    i = 0; // Initial index of first subarray 
    j = 0; // Initial index of second subarray 
    k = l; // Initial index of merged subarray 
    while (i < n1 && j < n2) 
    { 
        
      
        if (L[i] <= R[j]) 
        { 
            
            arr[k] = L[i]; 
            animations.push([k,i,arr[k],arr[i]]);
            /*animations.push([k,i,arr[k],L[i]]);*/
            i++; 
        } 
        else
        { 
            arr[k] = R[j]; 
           /* animations.push([k,j,arr[k],R[j]]);*/
           animations.push([k,j,arr[k],arr[j]]);
            j++; 
        } 
        k++; 
        
       
    } 
  
    /* Copy the remaining elements of L[], if there 
       are any */
    while (i < n1) 
    { 
        arr[k] = L[i]; 
        /*animations.push([k,i,arr[k],L[i]]);*/
        animations.push([k,i,arr[k],arr[i]]);
        i++; 
        k++; 
    } 
  
    /* Copy the remaining elements of R[], if there 
       are any */
    while (j < n2) 
    { 
        arr[k] = R[j]; 
        animations.push([k,j,arr[k],arr[j]]);
        /*animations.push([k,j,arr[k],R[j]]);*/
        j++; 
        k++; 
    } 
} 

/* l is for left index and r is right index of the 
   sub-array of arr to be sorted */
function sort(l, r) 
{ 

    if (l < r) 
    { 
        // Same as (l+r)/2, but avoids overflow for 
        // large l and h 
        var m = l+ Math.floor((r-l)/2); 
  
        // Sort first and second halves 
        sort( l, m); 
        sort( m+1, r); 
  
        merge(l, m, r); 
    } 
} 
export function getSwapsM(){
    return 0;

}