import React from 'react';

class Item extends React.Component {
  render(){
      let {index, todoName} = this.props
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{todoName}</td>
            <td>
                <button onClick={(e)=>this.props.handlerEdit(e, todoName)} type="button" class="btn btn-outline-primary"><i class="far fa-edit"></i></button>
                <button onClick={(e)=>this.props.handlerDelete(e, index)} type="button" class="btn btn-outline-danger"><i class="far fa-trash-alt"></i></button>
            </td>
        </tr>
    );
  }
}

export default Item;
