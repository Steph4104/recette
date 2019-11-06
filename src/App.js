import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Filters from './component/filters.js';
import axios from 'axios';
import {GridList, GridListTile, ListSubheader, GridListTileBar, IconButton} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';

class App extends Component {
  state = {
    contacts: [],
    data:''
  }

  componentWillReceiveProps(){
    this.get_list();
  }

  componentDidMount() {
  this.get_list();
  }


  get_list= (data) =>{
    const url = 'http://restapireact.sclmedia.ca/api/contacts.php?search='+data
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ contacts: data })
     })
  }

  render() {
    return (
      <div className={{display: 'flex',flexWrap: 'wrap',justifyContent: 'space-around',overflow: 'hidden'}}>
        <Filters sendFunction = {this.get_list}/>
        <h1>Recette</h1>
        <GridList cellHeight={160} className={{ width: 500,height: 450}} cols={4}>
          {this.state.contacts.map((contact) => (
            <GridListTile key={contact.id} cols={1}>
              <img src='https://via.placeholder.com/150' alt={contact.titre} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default App;
