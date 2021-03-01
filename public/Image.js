import React, { Component } from 'react';

class Image extends Component {

  constructor(props) {
    super(props);
    this.fname = props.fname;
    this.size = props.size;
    this.name = props.name;
  }

  render() {
    return(
      <img width={this.size} src={this.fname} className={this.name}/>
    )
  }
}

export default Image;