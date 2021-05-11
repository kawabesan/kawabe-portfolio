import React from 'react';
import Popup from './Popup';
import styles from '../../styles/portfolio.module.scss';
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
              dis={props.dis}
              period={props.period}
              os={props.os}
              lag={props.lag}
              fw={props.fw}
              db={props.db}
              appLink={props.appLink}
              >
              {props.children}
            </Popup>
          </section>
  )
}

export default PortfolioItem;