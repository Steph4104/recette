import React, { Component } from 'react';
import axios from 'axios';

class Filters extends Component {

  constructor(props) {
    super(props);
    this.state = {
        data:''
    }
    this.activateLasers = this.activateLasers.bind(this);
  }

  activateLasers= (id) =>{
    if(this.state.data !=''){
        if(id == 'reset'){
            this.setState({ data: ''})
            this.props.sendFunction('');
        }else{
            id = this.state.data+','+id
            this.setState({ data: id})
            this.props.sendFunction(id);
        }  
    }else{
        this.setState({ data: id})
        this.props.sendFunction(id);
    }
  }

  render(){
    return (
        <div>
           <button onClick={() => this.activateLasers('ss')}>ss</button>
            <button onClick={() => this.activateLasers('tags')}>tags</button>
            <button onClick={() => this.activateLasers('reset')}>reset</button>
        </div>
  )}
}

export default Filters;