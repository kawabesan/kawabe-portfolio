import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';



class Layout extends Component {
constructor(props) {
  super(props);
}

  render() {
    return(
    <div>
      <Head>
      <title>Kawabe Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <div>
        <Header profile={this.props.profile} portfolio={this.props.portfolio} skill={this.props.skill}/>

        <div className={styles.mainBox}>
        <h1 className={styles.titles}>{this.props.title}</h1>
        {this.props.children}
        </div>
        <Footer />
      </div>

    </div>
    )
  }
}

export default Layout;