import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Product from './Product';
import AddProduct from './AddProduct';

class Main extends Component{
  constructor(){
    super();
    this.state = {
      products : [],
      currentProduct : null
    };
    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    fetch('/api/products')
      .then(response => {
        return response.json();
      })
      .then(products => {
        this.setState({products});
      });
  }

  renderProducts(){
    return this.state.products.map(product => {
      return (
        <li onClick={() => this.handleClick(product)} key = {product.id}>
          {product.title}
        </li>
      );
    })
  }

  handleClick(product){
    this.setState({currentProduct:product})
  }

  render(){
    return(
      <div className="row">
        <div className="col-md-4">
          <h3> All products </h3>
          <ul>
            { this.renderProducts() }
          </ul>
        </div>
        <div className="col-md-4"> <AddProduct onAdd={this.handleAddProduct}/> </div>
        <div className="col-md-4"><Product product={this.state.currentProduct}/></div>
      </div>
    );
  }

  handleAddProduct(product){
    product.price = Number(product.price);
    product.title = String(product.title);
    product.description = String(product.description);
    product.availability = product.avail;
    fetch('api/products',{
      method : 'POST',
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },
      body : JSON.stringify(product)
    })
    .then(response => {
      return response.json();
    })
    .then(
        data => {
          this.setState((prevState) => ({
            products : prevState.products.concat(data),
            currentProduct : data
          }))
        })
    }

    handleDelete(){
      console.log(this.state.currentProduct);
      fetch('api/products/'+ this.state.currentProduct.id,{
        method : 'delete',
        headers : {
          'Accept' : 'application/json',
          'Content-Type' : 'application/json',
          'X-CSRF-TOKEN' : $('meta[name="csrf-token"]').attr('content')
        }
      })
      .then(response => {
        var array = this.state.products.filter(function(){
          return item !== currentProduct
        });
        this.setState({products:array,currentProduct:null});
      });
    }
}

export default Main;

if(document.getElementById('root')){
  ReactDom.render(<Main />,document.getElementById('root'));
}
