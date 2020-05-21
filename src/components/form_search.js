import React from 'react';

class FormSearch extends React.Component {
  render(){
    return (
        <div className="col-md-3 form-search">
            <div class="input-group md-form form-sm form-2 pl-0">
                <input class="form-control my-0 py-1 red-border" type="text" placeholder="text search" aria-label="Search"/>
                <div class="input-group-append">
                    <button class="input-group-text red lighten-3" id="basic-text1">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
        
    );
  }
}

export default FormSearch;
