import React, { useState } from 'react';
import styles from '../styles/FootStyle.module.scss';

function Footer() {
    return(
      <footer className={styles.foot}>
        <p>&copy; 2021 kawabePortfolio</p>
      </footer>
    )
}

export default Footer;