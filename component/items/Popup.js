import React, { useState } from "react";
import styles from '../../styles/portfolio.module.scss';

function Popup(props) {
  return (
    <div className={styles.popupBox}>
      {props.name}
    </div>
  )
}


export default Popup;