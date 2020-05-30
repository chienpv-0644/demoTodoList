import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/list'
import TodoForm from './components/todo_form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyContext from './my_contex';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoName: "",
      todo_lists: [
        {
          "id": "2",
          "createdAt": "2020-05-23T11:20:53.537Z",
          "name": "Lisette Gleason"
        },
        {
          "id": "3",
          "createdAt": "2020-05-22T21:31:25.144Z",
          "name": "Columbus Kuhlman"
        },
        {
          "id": "4",
          "createdAt": "2020-05-23T09:18:17.436Z",
          "name": "Bennie Williamson"
        },
        {
          "id": "5",
          "createdAt": "2020-05-23T05:11:02.229Z",
          "name": "Manuel Hansen"
        },
        {
          "id": "6",
          "createdAt": "2020-05-22T21:27:40.624Z",
          "name": "Devonte Wuckert"
        }
      ],
      loader: true   
    }
  }

  handlerSubmit(e, inputRef){
  }

  handlerEdit(e, todoName){
    // alert(todoName);
    this.setState({
      todoName: todoName
    })
  }

  componentDidMount(){
    // this.setState({
    //   loader: true
    // })
  }

  render(){
    return (
      <MyContext.Provider value={
          {
            todos: this.state.todo_lists,
            deleteTodo: (index)=> {
              let todos = this.state.todo_lists
              todos.splice(index,1)
              this.setState({
                todo_lists: todos
              })
            }
          }
        }>
        <div className="mg-app">
          <ToastContainer/>
          <TodoForm todoName={this.state.todoName} handlerSubmit={this.handlerSubmit.bind(this)}/>
          <List handlerEdit={this.handlerEdit.bind(this)}/>
          {this.state.loader && <div class="loader"></div>}
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;
