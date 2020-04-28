export function bubbleSort(list,speed){
  var array = list.slice();
  numSwaps = 0;
  const animations = [];
  const barsTotal = document.getElementsByClassName('array-node');
  var i,j;
  for (i = 0;i < array.length-1;i++){
    for (j = 0;j < array.length-1;j++){
        if(array[j] > array[j+1]){
          
          swap(array,j,j+1);
          animations.push([ j , j+1 ,array[j],array[j+1]]);
        }
    }
  }
  var x = array.length-1;
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
      

      }, 0.3 * i * speed)    
  }
  return array;
}
var numSwaps = 0;
function swap(array,i,j){
  numSwaps++;
  var temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
export function getSwapsB()
{
  return numSwaps;
  
}
