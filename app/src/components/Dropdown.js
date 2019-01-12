import React from "react"
import FontAwesome from 'react-fontawesome'
import '../styles/global.css'
import {dP, sL} from '../App.js'


class Dropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
      header: this.props.title
    }
    this.close = this.close.bind(this)
  }

  updated() {
    const {listOpen} = this.state
    setTimeout( () => {
      if (listOpen) {
        window.addEventListener("click", this.close)
      } else {
        window.removeEventListener("click", this.close)
      }
    }, 0)
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.close)
  }

  close(timeOut) {
    this.setState({
      listOpen : false
    }

    )
  }
  selectItem(title, id, stateKey) {


    this.setState({
      header: title,
      listOpen: false
    },
    this.props.resetThenSet(id, stateKey))


    console.log("ayyy", title, Object.keys(dP), id, stateKey)
    var arr = Object.keys(dP)
    for (var i = 0; i < arr.length; i++) {
      if (title == arr[i]) {
        console.log("oooooo", this.props, title)
        this.props.listChange(title)
      }
    }



  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  render() {
    const{list} = this.props
    const{listOpen, header} = this.state
    return(
      <div className="dd-wrapper">
        <div className="dd-header" onClick={() => this.toggleList()}>
          <div className="dd-header-title">{header}</div>
          {listOpen
            ? <FontAwesome name="angle-up" size="2x"/>
            : <FontAwesome name="angle-down" size="2x"/>
          }
        </div>
        {listOpen && <ul className="dd-list" onClick={e => e.stopPropagation()}>
          {list.map((item)=> (
            <li className="dd-list-item" key={item.id} onClick={() => this.selectItem(item.title, item.id, item.key)}>{item.title} {item.selected && <FontAwesome name="check"/>}</li>
          ))}
        </ul>}
      </div>
    )
  }
}

export default Dropdown
