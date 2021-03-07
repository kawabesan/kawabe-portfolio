import React, { useState } from "react";
import styles from "../../styles/Popup.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { Modal } from "react-bootstrap";

function Popup(props) {

  return (
    <Modal {...props} size="lg" centered>
      <div className={styles.popBox} >
      <div className={styles.popHead}> 
          <h3>{props.title}</h3>
          <p>{props.dis}</p>
      </div>
      <div className={styles.popBody}>
      <h4>開発環境</h4>
          <ul className={styles.popList}>
            <li>
              作成した期間 : <span>{props.period}</span>
            </li>
            <li>
              使用したOS : <span>{props.os}</span>
            </li>
            <li>
              使用した言語 : <span>{props.lag}</span>
            </li>
            <li>
              FW : <span>{props.fw}</span>
            </li>
            <li>
              DB : <span>{props.db}</span>
            </li>
          </ul>
      </div>
      <div className={styles.popBtn}>
        <Link href={props.appLink}>
          <Button
            style={{ fontSize: "1.4rem" }}
            variant="contained"
            color="secondary"
          >
            アプリを見る
          </Button>
        </Link>
        <Button style={{ fontSize: "1.4rem", marginLeft: "15px", }} onClick={props.onHide}>
          Close
        </Button>
      </div>

      </div>
    </Modal>
  );
}

export default Popup;
