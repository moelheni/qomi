import React, {Component} from 'react'

import axios from 'axios';


class StudentsList extends Component{
  constructor(props){
    super(props);
    axios.get("/api/students").then((data) => {
      this.students = data
    }).catch(function (error) {
      alert("Something went wrong")
    });
  }
  render(){
    return(
      <div className="StudentsList">
        <h2>jjjslls</h2>
      </div>
    )
  }
}

export default StudentsList;
