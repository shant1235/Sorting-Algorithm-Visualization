export function heapSort (list,speed){
    var array =list.slice();
    numSwaps= 0;
    root = 0;
    animations = [];
    heap = [];
    array.forEach(heapAdd);
    var i;
    var arr = [];
    for(i = 0 ; i < heap.length; i++){
      heapDelete();
    
    }
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
    console.log(animations.length)
      return heap;
    
}
const barsTotal = document.getElementsByClassName('array-node');
var root = 0;
var numSwaps= 0;
var heap = [];
var animations = [];

function swap(i,j){
    numSwaps++;
    var temp = heap[j];
    heap[j] = heap[i];
    heap[i] = temp;
    animations.push([i,j,heap[i],heap[j]]);
  
  }
  function heapDelete()
{
    swap(0,--root);
    Heapify(root,0);
    
}
function heapAdd(value,idx,arr)
{
    heap[root] = (value);
    
    root++;
    if(root != 1){
    maxHeapify(root, root-1);
}
}

  function maxHeapify(sizeOfArray,i)
{
  var parent = Math.floor((i-1)/2);
  var node  = i;
 
  
  if((parent < sizeOfArray) && (heap[node] > heap[parent]) ){
   
    swap(parent,node);
    node = parent;
    
    maxHeapify(sizeOfArray, node);
  }
  
}

export function getSwapsH()
{
  return numSwaps;
  
}

function Heapify(sizeOfArray,i)
{
    var largest = i;
 
    var left = 2*i + 1;
    var right = 2*i + 2;
    
  if((left < sizeOfArray) && (heap[left] > heap[largest]) )
    largest = left;

  if((right < sizeOfArray) && (heap[right] > heap[largest]))
    largest = right;

  if (largest != i){
    swap(i,largest);
    Heapify(sizeOfArray,largest);
  }
  
}