import React, { useState } from 'react';
import Popup from './Popup';
import styles from '../../styles/Portfolio.module.scss';
import Image from '../../public/Image';

function PortfolioItem(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return(
    <section className={styles.pfItems}>
              <h3 className={styles.pfTitle}>{props.pfTitle}</h3>
            <div className={styles.pfImgBox}>
            <div className={styles.imgEffBox} onClick={() => setModalShow(true)}>
              <Image name={styles.pfImg1} fname={props.fname} size={props.size} />
              </div>
            </div>

            <Popup title={props.pfTitle}
              show={modalShow}
              onHide={() => setModalShow(false)}
              dis="晩ご飯候補を何個か入力し、ランダムで決めてくれるアプリです。"
              period="2週間"
              os="Mac"
              lag="HTML・CSS, SASS, JavaScript"
              fw="React"
              db="firebase"
              appLink="https://mealplan-4565a.web.app/"
              >
              {props.children}
            </Popup>
          </section>
  )
}

export default PortfolioItem;