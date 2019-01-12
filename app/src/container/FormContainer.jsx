import React from "react"
import '../App.css'
import '../styles/global.css'
import Dropdown from '../components/Dropdown'
import '../dairy.csv'
import {dP, sL} from '../App.js'

class Form extends React.Component {
  state = {
      products: [
        {
          name: "",
          cost: "",
          quantity: "",
          department: "",
          productType:"",
          expirationDate: ""
        }],
      departments: [
        {
          id: 0,
          title: 'Dairy',
          selected: false,
          key: 'departments'
        },
        {
          id: 1,
          title: 'Bakery',
          selected: false,
          key: 'departments'
        },
        {
          id: 2,
          title: 'Fruits',
          selected: false,
          key: 'departments'
        },
        {
          id: 3,
          title: 'Vegetables',
          selected: false,
          key: 'departments'
        },
        {
          id: 4,
          title: 'Meats',
          selected: false,
          key: 'departments'
        }
      ],

      stuff: [
        {
          item1: "one",
          item2: "two"
        }
      ]


  }



  handleChange =(e) => {

    //console.log(this.state.stuff);
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
    /*
    if (e.target.className == "department" && e.target.value != null) {
        products = deptAndProducts[e.target.value]
    }
    */
  }

  listChange = (dep) => {
    var pS = dP[dep]
    console.log("listchange", dep, dP[dep])
    let stuff = [...this.state.stuff]

    var show = []

    for (var i = 0; i < pS.length; i++) {
      console.log("add")
      var dict = {
        id: 3,
        title: pS[i],
        selected: false,
        key: 'productType'
      }
      show.push(dict)
    }
    //const newArr = this.state.slice()
    this.setState({["stuff"] : show})
    console.log("setting new state to ", show)
    console.log("current new state ", this.props.stuff)
  }

  toggleSelected = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp[id].selected = !temp[id].selected
    this.setState({
      [key]: temp
    })


  }

  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp.forEach(item => item.selected = false);
    temp[id].selected = true;
    this.setState({
      [key]: temp
    })
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
          <div>

            <Dropdown
            title="Select Department"
            list={this.state.departments}
            resetThenSet={this.resetThenSet}
            listChange={this.listChange}
            />
            <br/>
            <Dropdown
            title="Select Type"
            //list={this.state.products}
            list = {this.state.stuff}
            resetThenSet={this.resetThenSet}
            listChange={this.listChange}
            />
          </div>

          <br/>
          <br/>
          <br/>

            <div class>
              <div class="left">
                <label htmlFor={ProductId}>Brand</label>
              </div>
                <input
                  type="text"
                  name={ProductId}
                  data-id={index}
                  id={ProductId}
                  value={products[index].name}
                  className="name"
                />
            </div>
            <div>
              <div class="left">
                <label htmlFor={CostId}>Cost</label>
              </div>
                <input
                  type="number"
                  name={CostId}
                  data-id={index}
                  id={CostId}
                  value={products[index].cost}
                  className="cost"
                />
            </div>




            <div>
              <div class="left">
                <label htmlFor={QuantityId}>Quantity</label>
              </div>
                <input
                  type="number"
                  name={QuantityId}
                  data-id={index}
                  id={QuantityId}
                  value={products[index].quantity}
                  className="quantity"
                />
                <br/>
            </div>

            <div>
              <div class="left">
                <label htmlFor={ExpirationDateId}>Expiration Date</label>
              </div>
                <input
                  type="text"
                  name={ExpirationDateId}
                  data-id={index}
                  id={ExpirationDateId}
                  value={products[index].expirationDate}
                  className="expirationDate"
                />

            </div>
            </div>
          )
        })
      }

      <input type="submit" value="Add Product" />
      </form>


      </div>




    )
  }
}

export default Form
