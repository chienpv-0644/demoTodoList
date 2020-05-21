import React from 'react';
import FormCreate from './form_create';
import FormSearch from './form_search';

class TodoForm extends React.Component {
  render(){
    return (
        <div class="card mg-form">
            <div class="card-body">
                <FormCreate todoName={this.props.todoName} handlerSubmit={this.props.handlerSubmit}/>
                <FormSearch/>
            </div>
        </div>
    );
  }
}

export default TodoForm;
