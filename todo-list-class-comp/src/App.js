import {Component} from 'react';
import './App.css';

class App extends Component{

  constructor()
  {
    super();
    this.state =
    {
      name : 'Exercise',
      list : [ 
             {
              id : 1,
              name :'Apple'
             },
             {
              id : 2,
              name :'Banana'
             },
             {
              id : 3,
              name :'Mango'
             },
            ],

      remove_item : false,
    }

    console.log('list :' , this.state.list);

  }


  inputChange = (event) =>
  {
    this.setState(
      () =>
      {
        return { 
                 name : event.target.value,
        }
      }
      ,
      () =>
      {
        console.log('list updated');
      }
    );

  }

  addTask = () =>
  {

    const new_items = [this.state.name];

    if (this.state.name !== '')
    {
      this.setState(
        () =>
        {
          return {
            list : [...this.state.list , ...new_items],
            name : '',
  
           
          };
        },
  
        () =>
        {
          console.log('task added successfully!', this.state.list);
        }
      );
    }

    else
    {
      alert('enter something first!');
    }
    
  }

  
  removeItem = () =>
  {
  
    alert('item removed');
    console.log('remove button :' , this.state.remove_item);
  }


  render()
  {
    const list_item_styling = {
      display : 'flex',
      justifyContent : 'space-between'
    }

    return (
      <div className="App">
        <div className='form'>
           <h1>todooo</h1>
           <input type="text" placeholder="Enter Task" value= {this.state.name} onChange = {this.inputChange} />
           <button onClick = {this.addTask}>Add Task</button>

           <ul>
             {
              this.state.list.map( (items) =>
              {
                return(
              
                  <li key={items.id}>
                    <div style={list_item_styling}>
                      <p>
                        {items.name}
                      </p>
                      <button onClick = {this.removeItem}>
                          X
                      </button>
                    </div>
                  </li>

                );
              })
             }
           </ul>
           
        </div>
      </div>
    );
  }
}

export default App;
