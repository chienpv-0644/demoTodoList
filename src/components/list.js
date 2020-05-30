import React from 'react';
import Item from './item';
import MyContext from '../my_contex';

class List extends React.Component {
  render(){
    let dataShow = this.context.todos.map((value, index)=>{
        return <Item handlerEdit={this.props.handlerEdit} key={index} todoName={value.name} index={index}/>
    })
    return (
      <div>
        <table class="table table-bordered">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {dataShow}
        </tbody>
        </table>
      </div>
    );
  }
}


List.contextType = MyContext;
export default List;
