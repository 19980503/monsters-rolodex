import React, {Component} from 'react';
import './App.css';

import {CardList} from './components/card-list/card-list.components'

import {SearchBox} from '../src/components/search-box/searchbox.component'


class App extends Component{
  constructor(){
    super();
    this.state ={
    monsters: [],
    searchField:''
   };

   //Define the hander context in our Constructor
   // this.handleChange = this.handleChange.bind(this);

  }

  //1 Button 1 s clicked
  // 1 Button 1 is Clicked
  // 2 Button 1 is Clicked
  //3 Button 3 is clicked




  //Getting the Json APi Response
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }


  //The Change Method for the search filed
  handleChange = e => {
    this.setState({searchField: e.target.value});
  }




// The Render Method
  render(){
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )


    return (
      <div className="App">
      <h1 className='title'> Monsters Rolodex </h1>
       <SearchBox 
          placeholder = 'search monsters' 
          handleChange = {this.handleChange} 
       />
      <CardList monsters = {filteredMonsters}/>
    </div>
    );
  }
}

export default App;
