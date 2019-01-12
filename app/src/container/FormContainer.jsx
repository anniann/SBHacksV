import React from "react"
import '../App.css'
//import Input from '../components/Input.jsx'

class Form extends React.Component {
  state = {
        products: [{name: "",
              cost: "",
              quantity: "",
              department: "",
              productType:"",
              expirationDate: ""}]
  }

  handleChange =(e) => {
    if (["name",
          "cost",
          "quantity",
          "department",
          "productType",
          "expirationDate"].includes(e.target.className)) {
      let products = [...this.state.products]
      //products[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
      products[e.target.dataset.id][e.target.className] = e.target.value
      this.setState({products}, () => console.log(this.state.products))
    } else {
      //this.setState({ [e.target.name]: e.target.value.toUpperCase() })
      this.setState({[e.target.name]: e.target.value})
    }
  }


  handleSubmit = (e) => {
    e.preventDefault()
  }

  addProduct = (e) => {
      this.setState((prevState) => ({
        products: [...prevState.products, {name: "",
                                            cost: "",
                                            quantity: "",
                                            department: "",
                                            productType:"",
                                            expirationDate: ""}],
      }));
  }

  render() {
    let {products} = this.state
    return (
      <div className="newContent">
      <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
      <br/>
      <br/>

      {
        products.map((value, index) => {
          let ProductId = `Product-${index}`,
              DepartmentId = `Department-${index}`,
              ProductTypeId = `ProductType-${index}`,
              CostId = `Cost-${index}`,
              QuantityId = `Quantity-${index}`,
              ExpirationDateId = `ExpirationDate-${index}`
          return (
            <div key={index}>
              <label htmlFor={ProductId}>Product</label>
              <input
                type="text"
                name={ProductId}
                data-id={index}
                id={ProductId}
                value={products[index].name}
                className="name"
              />


              <br/>
              <label htmlFor={CostId}>Cost</label>
              <input
                type="number"
                name={CostId}
                data-id={index}
                id={CostId}
                value={products[index].cost}
                className="cost"
              />
              <br/>
              <label htmlFor={QuantityId}>Quantity</label>
              <input
                type="number"
                name={QuantityId}
                data-id={index}
                id={QuantityId}
                value={products[index].quantity}
                className="quantity"
              />
              <br/>

              <label htmlFor={ExpirationDateId}>Expiration Date</label>
              <input
                type="text"
                name={ExpirationDateId}
                data-id={index}
                id={ExpirationDateId}
                value={products[index].expirationDate}
                className="expirationDate"
              />
              <br/>
              <br/>
            </div>
          )
        })
      }

      <input type="submit" value="Submit" />
      </form>
      </div>
    )
  }
}

export default Form
