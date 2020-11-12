import React, { Component } from 'react';
import Axios from 'axios';
import {getAllTodos} from '../services/todoService'

export default class Home extends Component {


  componentDidMount(){
Axios.get(`${SREACT_APP_API_BASE_URL}`+ ./home).then(res=>{
    })

  }
  }

  render() {                
    return (
      <div className="Home">
        <h2>Home</h2>
        <p>TodoIst</p>
      </div>
    );
  }
}