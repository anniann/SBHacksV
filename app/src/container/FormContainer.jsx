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
          title: '1 Week ',
          selected: false,
          key: 'departments'
        },
        {
          id: 1,
          title: '2 Weeks',
          selected: false,
          key: 'departments'
        },
        {
          id: 2,
          title: '4 Weeks',
          selected: false,
          key: 'departments'
        },
        {
          id: 3,
          title: '8 Weeks',
          selected: false,
          key: 'departments'
        },
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
    console.log("past state ", this.props.stuff)
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
    console.log("submitted!!")

    var PythonShell = require('python-shell');
    //PythonShell.run('my_script.py', options, function (err, results) {
      // add command line code here
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
            title="Select Period"
            list={this.state.departments}
            resetThenSet={this.resetThenSet}
            listChange={this.listChange}
            />
          </div>

          <br/>
          <br/>
          <br/>


            </div>
          )
        })
      }

      <input type="submit" value="Run Model" />
      </form>


      </div>




    )
  }
}

export default Form
