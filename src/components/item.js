import React from 'react';
import MyContext from '../my_contex';


class Item extends React.Component {
  render(){
    let {index, todoName} = this.props;
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{todoName}</td>
            <td>
            <MyContext.Consumer>
              {context => {
                  return(
                    <>
                      <button onClick={(e)=>this.props.handlerEdit(e, todoName)} type="button" class="btn btn-outline-primary"><i class="far fa-edit"></i></button>
                      <button onClick={()=> context.deleteTodo(index)} type="button" class="btn btn-outline-danger"><i class="far fa-trash-alt"></i></button>
                    </>
                  )
                }
              }
            </MyContext.Consumer>
                
            </td>
        </tr>
    );
  }
}

export default Item;
