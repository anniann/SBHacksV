import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormContainer from './container/FormContainer';
import CSVReader from "react-csv-reader";
import ReactDOM from "react-dom";


/* dictionary where
    key: Department
    value: Products (array) */
var deptAndProducts = {};


/* dictionary where
    key: Product
    value: Shelf Life Num */
var shelfLifeInfo = {};





/* Array Content Verification for Console */
const handleForce = data => {
  console.log(data);
  //stuff = data;
  //console.log(Array.isArray(shelfLifeInfo))

  for (var i = 0; i < data.length; i++) {
    if (data[i][0] in deptAndProducts) {
      // if key is already in dict
      deptAndProducts[data[i][0]].push(data[i][1]);
    } else {
      // if not
      deptAndProducts[data[i][0]] = [data[i][1]];
    }


    shelfLifeInfo[data[i][1]] = data[i][2];
  }
  console.log(deptAndProducts);
  console.log(shelfLifeInfo);
};

export const dP = deptAndProducts
export const sL =  shelfLifeInfo


class App extends Component {
  render() {
    return (
      <div className="App">
        <h3> Form </h3>
        <CSVReader
          cssClass="react-csv-input"
          label="Please Input Known Storage Life"
          onFileLoaded={handleForce}
        />

        <FormContainer/>
      </div>
    );
  }
}




export default App;
