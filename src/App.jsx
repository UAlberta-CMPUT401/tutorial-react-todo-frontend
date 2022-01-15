// import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World Jashwanth!</h1>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import Plan from './Plan.jsx'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { RESTCaller } from './helpers';
import { GetRESTCaller } from './helpers';
import { DeleteRESTCaller } from './helpers';

class App extends Component {
  state = {
    items: [],
    id: 0,
    title: "",
    desc: "",
    checked: false
  }

  async componentDidMount() {
    const url = `https://401-todo-api.azurewebsites.net/api/todo/`;
    const response = await GetRESTCaller(url);
    this.setState({items: response})
  }

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  }
  handleDescChange = e => {
    this.setState({ desc: e.target.value });
  }
  handleCheckChange = e => {
    this.setState({ checked: e.target.checked });
  }

  handleAdd = async (e)  => {
    if (this.state.title !== "") {
      const addUrl = `https://401-todo-api.azurewebsites.net/api/todo/`;
      const headers = {
        'Content-Type': 'application/json'
        };
      const data = {
        "title": this.state.title,
        "description": this.state.desc,
        "completed": this.state.checked
      };
      const addResponse = await RESTCaller(addUrl, headers, data);
      const items = [...this.state.items, {title: this.state.title, description: this.state.desc, completed: this.state.checked, id: addResponse.id}];
      this.setState({ items: items, title: "" , desc: "", checked: false, id: 0});
    }
  }
  handleDelete = async (id) => {
    console.log("Deleted", id);
    const Olditems = [...this.state.items]
    console.log("Olditems", Olditems);
    const items = Olditems.filter((element, i) => {
      return element.id !== id
    })
    console.log("Newitems", items);
    this.setState({ items: items });

    const deleteUrl = `https://401-todo-api.azurewebsites.net/api/todo/${id}/?format=api`;
    await DeleteRESTCaller(deleteUrl);
  }
  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3 main-center">
            <h2 className="text-center"> Today's Plan </h2>
            <div className="container-fluid">
              <div className="row">
                <div>
                  <div className="col-9">
                    <input type="text" className="form-control" placeholder="Write Title Here" value={this.state.title} onChange={this.handleTitleChange} />
                  </div>
                  <div className="col-9 mt-5">
                    <input type="text" className="form-control" placeholder="Write Description Here" value={this.state.desc} onChange={this.handleDescChange} />
                  </div>
                  <div>
                    <span>
                      Completed:
                    </span>
                    
                      <input className="mt-5" type="checkbox" placeholder="Write Description Here" value={this.state.checked} onChange={this.handleCheckChange} />
                    
                  </div>
                </div>
                <div className="col-2 addContainer">
                  <button className="btn btn-warning px-5 font-weight-bold" onClick={this.handleAdd}>Add</button>
                </div>
              </div>
              <div className="conatiner">
                <ul className="list-unstyled row m-5">
                  {
                    this.state.items.map((value, i) => {
                      return <Plan key={i} id={value.id} value={value} sendData={this.handleDelete} />
                    })
                  }
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default App;