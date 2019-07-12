import React from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends React.Component {
  state ={
    todos:[
      {
        id:1,
        title:'Take out the trash',
        completed:false
      },
      {
        id:2,
        title:'Dinner with wife',
        completed:false
      },
      {
        id:3,
        title:'Meeting with boss',
        completed:false
      },
    ]
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })
  });


  }

  deleteItem = (id) => {
    console.log(id)
    var temp_array = [...this.state.todos]; // uses spread operator ( ... ) wow!
    var index = id - 1;
    temp_array.splice(index, 1)
    this.setState({todos:temp_array})

  };
  render(){
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete = {this.markComplete} deleteItem = {this.deleteItem} />
        </div>
    );
  }
}

export default App;
