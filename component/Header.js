import React from "react";
import styles from "../styles/Headstyle.module.scss";
import Link from "next/link";
import Image from "../public/Image";
import { Button } from "react-bootstrap";

function Header(props) {
  return (
    <header className={styles.head}>
      <div className={styles.headBox}>
        <div className={styles.headBackImg}>
          <Image name={styles.backImg} fname="./DSC00250.JPG" size="100%" />
        </div>
        <div className={styles.headTitleBox}>
          <h1 className={styles.headTitle}>Kawabe Portfolio</h1>
        </div>
      </div>

      <nav className={styles.headnav}>
        <ul className={styles.headnavBox}>
          <li>
            <Link href={props.profile}>
              <Button className={styles.navBtn} variant="outline-secondary">
                <a>Profile</a>
              </Button>
            </Link>
          </li>
          <li>
            <Link href={props.portfolio}>
              <Button className={styles.navBtn} variant="outline-secondary">
                <a>Portfolio</a>
              </Button>
            </Link>
          </li>
          <li>
            <Link href={props.skill}>
              <Button className={styles.navBtn} variant="outline-secondary">
                <a>Skill</a>
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
