import React, { Component } from 'react';
import FootStyle from '../styles/FootStyle.module.scss';

class Footer extends Component {
  render() {
    return(
      <footer className={FootStyle.foot}>
        <p>CopyRigth kawabePortfolio</p>
      </footer>
    )
  }
}

export default Footer;