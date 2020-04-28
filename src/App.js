import React from 'react';
import logo from './logo.svg';
import './App.css';
import SortingGraph from './SortingGraph/SortingGraph'


class App extends React.Component{
  render(){
    return (
      <div className="App">
        <SortingGraph className= "App-header"></SortingGraph>
      </div>
    );
  }
}
export default App;
