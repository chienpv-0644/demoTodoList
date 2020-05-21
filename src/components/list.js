import React from 'react';
import Item from './item';

class List extends React.Component {
  render(){
    let dataShow = this.props.todos.map((value, index)=>{
        return <Item handlerEdit={this.props.handlerEdit} handlerDelete={this.props.handlerDelete} key={index} todoName={value.name} index={index}/>
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

export default List;
