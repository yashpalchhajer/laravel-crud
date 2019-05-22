import React, {Component} from 'react';

class UpdateProduct extends Component
{
  constructor(props){
    super(props);
    this.state = {
      prodDetail : {
        title : '',
        description : '',
        price : 0,
        availability : 0
      }
    }
  }

  render(){
    <div>
      <h2> Update product </h2>
      <div>
        <form onSubmit={this.handleUpdate}>
        </form>
      </div>
    </div>
  }


}
