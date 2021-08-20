import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import "./_app.js"
//import styles from '../styles/Home.module.css'


class Home extends React.Component {

  buttonClick() {
    document.getElementsByClassName('description')[0].innerHTML = "test successful!";
    console.log('hello');
  }

  render() {
    return (
      <div className="main">
        <Head>
          <title>South Pointe Music</title>
          <meta name="South Pointe Music Official Site" content="Created with ReactJS, Next.JS, Github Pages and Vercel" />
          <link rel="icon" href="/south-pointe-logo-white-trans.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,700,900" rel="stylesheet"/> 
        </Head>
        {/*-----START HOME DIV-----*/}
        <div className="home-container">
          <div className="home-navbar-wrapper">
            <img src='/south-pointe-logo-white-trans.png' id='logo'></img>
            <div className="navbar">
              <a className="nav-link nav-link-ltr" href="#">HOME</a>
              <a className="nav-link nav-link-ltr" href="#">MUSIC</a>
              <a className="nav-link nav-link-ltr" href="#">CLUB</a>
              <a className="nav-link nav-link-ltr" href="#">CONTACT</a>
            </div>
            {/*<button type="button" className="button" onClick={e => this.buttonClick()}>TEST</button>*/}
          </div>
          <div className="home-container-b">
            <p className="home-description">
              Welcome to <b>South Pointe!</b><br></br><br></br>
              We are an alternative rock band, based in <b>Miami, Florida.</b><br></br><br></br>
              Our love for music is ased on its ability to <b>breathe life into others and ourselves.</b><br></br><br></br>
              Stay tuned for our first single release!
            </p>
          </div>
        </div>
        {/*-----END HOME DIV-----*/}
        {/*-----START MUSIC DIV-----*/}
        <div className="music-container">
          <div className="music-navbar-wrapper">
            <div className="music-navbar">
              <a className="music-nav-link music-nav-link-ltr" href="#">HOME</a>
              <a className="music-nav-link music-nav-link-ltr" href="#">MUSIC</a>
              <a className="music-nav-link music-nav-link-ltr" href="#">CLUB</a>
              <a className="music-nav-link music-nav-link-ltr" href="#">CONTACT</a>
            </div>
          </div>
          <div className="music-description-wrapper">
            <div className="music-title">
              <center><b>SALTWATER<br></br>BAPTISM</b></center>
            </div>
            <p className="music-description">
              <center><b>SINGLE DEBUT COMING SOON</b></center>
            </p>
          </div>
        </div>
        {/*-----END MUSIC DIV-----*/}
        {/*-----START CLUB DIV-----*/}
        <div className="club-container">
          <div className="club-navbar-wrapper">
            <div className="club-navbar">
              <a className="nav-link nav-link-ltr" href="#">HOME</a>
              <a className="nav-link nav-link-ltr" href="#">MUSIC</a>
              <a className="nav-link nav-link-ltr" href="#">CLUB</a>
              <a className="nav-link nav-link-ltr" href="#">CONTACT</a>
            </div>
          </div>
          <div className="club-content-outer-wrapper">
            <div className="club-content-inner-wrapper">
              <div className="club-title"><b>JOIN THE CLUB</b></div>
              <p className="club-description">Join our fan club for special VIP<br></br>perks, exclusive
                music releases,<br></br>content, and access with the band!</p>
              <input className="club-textbox" type="text" id="clubSubmit" name="userEmail" placeholder="E-MAIL"></input>
              <button type="button" className="emailSubmit" onClick={e => this.emailSubmit()}>SUBMIT</button>
            </div>
          </div>
        </div>
        {/*-----END CLUB DIV-----*/}
        {/*-----START CONTACT DIV-----*/}
        <div className="contact-container">
          <div className="contact-navbar-wrapper">
            <div className="contact-navbar">
              <a className="nav-link nav-link-ltr" href="#">HOME</a>
              <a className="nav-link nav-link-ltr" href="#">MUSIC</a>
              <a className="nav-link nav-link-ltr" href="#">CLUB</a>
              <a className="nav-link nav-link-ltr" href="#">CONTACT</a>
            </div>
          </div>
          <div className="contact-content-outer-wrapper">
            <div className="contact-content-inner-wrapper">
              <div className="contact-title"><b>CONTACT US</b></div>
              <p className="contact-description">Feel free to reach out to us<br></br>for bookings, feedback, or<br></br>
                special requests!</p>
            </div>
            <div className="contact-content-second-wrapper">
              <input className="contact-name-textbox" type="text" name="userName" placeholder="NAME"></input>
              <input className="contact-email-textbox" type="text" name="userEmail" placeholder="E-MAIL"></input>
              <textarea className="contact-message-textarea" rows="6" cols="42" name="contactMessage" placeholder="MESSAGE"></textarea>
              <button type="button" className="contactSubmit" onClick={e => this.emailSubmit()}>SUBMIT</button>
            </div>
          </div>
        </div>
        {/*-----END CONTACT DIV-----*/}
        {/*-----END CONTACT DIV-----*/}
        <footer>
        </footer>
      </div>
    )
  }
}
export default Home;