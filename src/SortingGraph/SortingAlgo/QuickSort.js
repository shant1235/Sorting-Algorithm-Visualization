export function quickSort (list,speed){
    arr = list.slice();
    animations = [];
    numSwaps = 0;
    sort(0,arr.length-1);
    
    var i;
    
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
var numSwaps = 0;
const barsTotal = document.getElementsByClassName('array-node');
function sort(low,high){
    
    if(low < high){
        var pi = partition(low,high);
        sort(low,pi-1);
        sort(pi+1,high);
        
    }

}

function partition (low, high)
{
    var pivot = arr[high];  
 
    var i = (low - 1)  
    var j;
    for (j = low; j <= high - 1; j++)
    {
       
        if (arr[j] < pivot)
        {
            i++;    
            swap(i, j);
        }
    }
    swap(i+1,high);
    return (i + 1);
}

function swap(i,j){
    numSwaps++;
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    animations.push([i,j,arr[i],arr[j]]);
}

export function getSwapsQ(){
    return numSwaps;

}
