import React, { Component } from 'react';

class AddProduct extends Component{
  constructor(props){
    super(props);
    this.state = {
      newProduct: {
        title : '',
        description : '',
        price : 0,
        availability : 0
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }


  handleInput(key,e){
    var state = Object.assign({},this.state.newProduct);
    state[key] = e.target.value;
    this.setState({newProduct : state });
  }


  handleSubmit(e){
    e.preventDefault();
    this.props.onAdd(this.state.newProduct);
  }

  render(){
    const divStyle = {}

    return(
      <div>
        <h2> Add new Product </h2>
        <div style={divStyle}>
          <form onSubmit={this.handleSubmit}>
            <label> Title : {}
              <input type="text" onChange={(e) => this.handleInput('title',e)}/>
            </label>
            <label> Description : {}
              <input type="text" onChange={(e) => this.handleInput('description',e)}/>
            </label>
            <label> Price : {}
              <input type="text" onChange={(e) => this.handleInput('price',e)}/>
            </label>
            <div className="radio">
              <label>
                <input type="radio" value="1" name="avail" onChange={(e) => this.handleInput('avail',e)} />
                Available
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="0" name="avail" onChange={(e) => this.handleInput('avail',e)} />
                Out of stock
              </label>
            </div>

            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    )
  }
}

export default AddProduct;
