import React, { useState } from 'react';
import styles from '../styles/FootStyle.module.scss';
import Link from 'next/link';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
    return(
      <footer className={styles.foot}>
        <div className={styles.iconBox}>
        <Link href="https://github.com/kawabesan">
        <div className={styles.gIcon}>
          <GitHubIcon style={{ fontSize: "30px", color: "#fff", cursor: "pointer"}}/>
        </div>
        </Link>
        <Link href="https://twitter.com/xsbzMpQNmOJq0hF">
        <div className={styles.tIcon}>
          <TwitterIcon style={{ fontSize: "30px", color: "#fff", cursor: "pointer"}}/>
        </div>
        </Link>
        </div>

        <p>&copy; 2021 kawabePortfolio</p>
      </footer>
    )
}

export default Footer;