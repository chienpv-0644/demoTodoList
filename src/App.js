import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/list'
import TodoForm from './components/todo_form';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoName: "",
      todo_lists: [
        {
          id: 1,
          name: "Hoc HTML"
        },
        {
          id: 2,
          name: "Hoc CSS"
        },
        {
          id: 3,
          name: "Hoc JS"
        },
        {
          id: 4,
          name: "Hoc ReactJS"
        }
      ]
    }
  }

  handlerSubmit(e, inputRef){
    e.preventDefault();
    let todo = {
      id: 10,
      name: inputRef.current.value
    }
    this.setState({
      todo_lists: [...this.state.todo_lists, todo]
    })
  }

  handlerDelete(e, index){
    let todos = this.state.todo_lists
    todos.splice(index,1)
    this.setState({
      todo_lists: todos
    })
  }

  handlerEdit(e, todoName){
    // alert(todoName);
    this.setState({
      todoName: todoName
    })
  }

  render(){
    return (
      <div className="mg-app">
        <TodoForm todoName={this.state.todoName} handlerSubmit={this.handlerSubmit.bind(this)}/>
        <List handlerEdit={this.handlerEdit.bind(this)} handlerDelete={this.handlerDelete.bind(this)} todos={this.state.todo_lists}/>
      </div>
    );
  }
}

export default App;
