import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';


class App extends Component
{
  constructor(){
    super();

    this.state = 
    {
      monsters : [],
      searchField : '',
    };

 
    }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users').
    then((response) => response.json() ).
    then((users) =>  this.setState( 
      () => {

        return {monsters : users}
      } , 

      () => {

        console.log('monsters', this.state);
      }));

  }

  onSearchField = (event) => 
  {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => 
      {
        return { searchField };
      }
    
      );

  }


  render()
  {
/* 
    console.log('render'); */

    //destructuring to make the code more readable
    const { monsters , searchField} = this.state;
    const { onSearchField } = this;

    const filteredMonsters = monsters.filter((monster) => 
    {
      return monster.name.toLocaleLowerCase().includes(searchField);

    });

    return(
      <div className="App">
      
      <input  
          type='text'
          placeholder='search monster' 
          onChange={onSearchField} 
      />


      {filteredMonsters.map((monster) => {

        return <h2 key={monster.id}>{monster.name}</h2>

        })
      }

      <CardList anything = "aa" />

      </div>
    );

  }
}


export default App;
