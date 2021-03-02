import React, { useState } from 'react';
import Popup from './Popup';
import styles from '../../styles/portfolio.module.scss';
import Image from '../../public/Image';

function pfImgBox(props) {
  return(
    <section className={styles.pfItems}>
              <h3 className={styles.pfTitle}>{props.pfTitle}</h3>
            <div className={styles.pfImgBox}>
            <div className={styles.imgEffBox}>
              <Image name={styles.pfImg1} fname={props.fname} size={props.size}/>
              </div>
            </div>
            <Popup name='pop1'>
              {props.children}
            </Popup>
          </section>
  )
}

export default pfImgBox;