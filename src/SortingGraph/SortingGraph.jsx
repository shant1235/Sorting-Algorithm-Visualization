import './SortingGraph.css'
import {bubbleSort, getSwapsB} from './SortingAlgo/BubbleSort.js'
import {heapSort, getSwapsH} from './SortingAlgo/HeapSort.js'
import {quickSort,getSwapsQ} from './SortingAlgo/QuickSort.js'
import {mergeSort,getSwapsM} from './SortingAlgo/MergeSort.js'
import React from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { positions } from '@material-ui/system';
import Box from '@material-ui/core/Box';

import { sizing } from '@material-ui/system';
export default class SortingGraph extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            array: [],
            originArray: [],
            swaps:0,
            arrayLength: 100,
            Algo: "Q",
            sizeCount:0,
            speed:3,
        
        };
        this.Bsort = this.Bsort.bind(this);
        this.Hsort = this.Hsort.bind(this);
        this.Qsort = this.Qsort.bind(this);
        this.Msort = this.Msort.bind(this);
        this.updateArray = this.updateArray.bind(this);
        this.setAlgo = this.setAlgo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount(){
        this.addValues();
    }
 
    addValues(){
        const array = [];
        for(let i = 0; i < this.state.arrayLength;i++){
            array[i] = Math.floor(Math.random() * 850);
            
        }
        this.setState({
            array: array,
            originArray: array,
        });        
    }
    setAlgo(algo){
        this.setState({
            Algo: algo,
        });    
        var bubbleB,heapB,quickB,mergeB,i; 
        const buttonT = document.getElementsByTagName("Button");
      
       
        for(i = 0; i < buttonT.length; i++){
            
            if(buttonT[i].name == "B"){
                bubbleB = buttonT[i];
            }else if(buttonT[i].name == "H"){
                heapB = buttonT[i];
            }else if(buttonT[i].name == "Q"){
                quickB = buttonT[i];
            }else if(buttonT[i].name == "M"){
                mergeB = buttonT[i];
            }
        }
       
        bubbleB.className = "sort-button";
        heapB.className = "sort-button";
        quickB.className = "sort-button";
        mergeB.className = "sort-button";
        if(algo == "B"){
            bubbleB.className = "algo-button";
            
        }else if(algo == "Q"){
            quickB.className = "algo-button";
        }else if(algo == "M"){
            mergeB.className = "algo-button";
        }else if(algo == "H"){
            heapB.className = "algo-button";
        }

    }
  
    sortArray(){
        

        if(this.state.Algo == "B"){
            this.Bsort();
        }else if(this.state.Algo == "Q"){
            this.Qsort();
        }else if(this.state.Algo == "M"){
            this.Msort();
        }else if(this.state.Algo == "H"){
            this.Hsort();
        }

        var sortArrayB,i; 
        const buttonT = document.getElementsByTagName("Button");
      
       
        for(i = 0; i < buttonT.length; i++){
            
            if(buttonT[i].name == "A"){
                sortArrayB = buttonT[i];
                
            }
        }
        sortArrayB.disabled = true;
        console.log(sortArrayB);
        setTimeout(() => {   
            sortArrayB.disabled = false;
           
        },  2000)
    }

    Bsort(){
        
        this.setState({
                array: bubbleSort(this.state.array,this.state.speed),
                swaps: getSwapsB(),
            });
         
    }
    Hsort(){
       
        this.setState({
            array: heapSort(this.state.array,this.state.speed),
            swaps: getSwapsH(),
        });
        
    }
    Qsort(){
        
        this.setState({
            array: quickSort(this.state.array,this.state.speed),
            swaps: getSwapsQ(),
        });
        
    }
    Msort(){
     
        this.setState({
            array:  mergeSort(this.state.array,this.state.speed),
            swaps: getSwapsM(),
        });
       
    }
    updateArray(){
        const array = this.state.array.slice();
        const barsTotal = document.getElementsByClassName('array-node');
       
        for(let i = 0; i < this.state.arrayLength;i++){
            const bar1Style = barsTotal[i].style;
        }
  
    }  
    changeSize(){
        this.state.sizeCount++;
        if(this.state.sizeCount == 0){
            this.state.arrayLength = 50;
        }else if(this.state.sizeCount == 1){
            this.state.arrayLength = 100;
        }else if(this.state.sizeCount == 2){
            this.state.sizeCount = 0;
            this.state.arrayLength = 300;
        }
        this.setState();
        
    } 
     handleChange = (event, newValue) => {
        this.setState({
            arrayLength: newValue,
        });
        this.addValues();
        var buttonT = document.getElementsByClassName("array-node");
       
        if(newValue <= 30){ 
            for(let i = 0; i < buttonT.length;i++){
                buttonT[i].style.width = 30 + "px";
                this.setState({
                    speed: 300,
                });
            }

        }else if(newValue > 30 && newValue <= 100){
            for(let i = 0; i < buttonT.length;i++){
                buttonT[i].style.width = 5 + "px";
               
            }
            this.setState({
                speed: 30,
            });
        }else if(newValue > 100){
            for(let i = 0; i < buttonT.length;i++){
                buttonT[i].style.width = 3 + "px";
               
            }
            this.setState({
                speed: 3,
            });
        }
        
        
      };

    updateScreen(){
    
    return (this.state.originArray.map((value,index) => (
        <div className = "array-node" key = {index}  style={{height: value +"px"}}>
        
        </div>
        )));           
    }


    render(){
        return(
            <div >
                <div className = "button-container">
                    <h1 className = "title">Sorting Algorithm Visualization</h1>
                    <div className = "divider">|</div>
                    <button className = "sort-button" onClick={() => this.addValues()}>Generate List</button>
                    <div className = "divider2">|</div>
                    <button name = "B" className = "sort-button" onClick={() => this.setAlgo("B")}>BubbleSort</button>
                    <button name = "H" className = "sort-button" onClick={() => this.setAlgo("H")} >HeapSort</button>
                    <button name = "Q" className = "sort-button" onClick={() => this.setAlgo("Q")} >QuickSort</button>
                    <button name = "M" className = "sort-button" onClick={() => this.setAlgo("M")} >MergeSort</button>
                    <div className = "divider2">|</div>
                    <button name = "A" className = "sort-button" onClick={() => this.sortArray()}  >Sort Array</button>
                    <div className = "divider2">|</div>
                        <Box display = "inline-block" width={300} p={1}> 
                            <Typography id="continuous-slider" >Size: </Typography>
                            <Slider valueLabelDisplay="auto" step = {1} onChangeCommitted={this.handleChange} defaultValue={100} min = {5} max = {200}  aria-labelledby="continuous-slider"/>
                        </Box>
                     
                    </div>
               
                <div className = "array-container">
                    {this.updateScreen()}
                </div>
        </div>
        ); 
    };
}

