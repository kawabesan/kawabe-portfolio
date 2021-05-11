import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

function Layout(props) {
  return (
    <div>
      <Head>
        <title>Kawabe Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header
          profile={props.profile}
          portfolio={props.portfolio}
          skill={props.skill}
        />

        <div className={styles.mainBox}>
          <h1 className={styles.titles}>{props.title}</h1>
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
