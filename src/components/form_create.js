import React from 'react';

class FormCreate extends React.Component {
constructor(){
    super()
    this.inputRef = React.createRef()
}

componentDidUpdate(){
    this.inputRef.current.value = this.props.todoName
}

  render(){
    return (
      <div>
        <form onSubmit={(e)=>{
            this.props.handlerSubmit(e, this.inputRef);
            this.inputRef.current.value = "";
            }} className="form-inline">
            <div className="form-group">
                <input ref={this.inputRef} type="text" className="form-control" placeholder="name"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormCreate;
