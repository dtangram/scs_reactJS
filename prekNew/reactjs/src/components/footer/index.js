/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import PropTypes from 'prop-types';
import RRPropTypes from 'react-router-prop-types';
import { HashLink as Link } from 'react-router-hash-link';
// import { Container, Row, Col } from 'reactstrap';
import { Link as RRLink, a } from 'react-router-dom';
// import Link from '../../link';
// import '../../css/main.css';
// import styles from './styles.module.css';
// import logo from '../../img/logo.png';
// import heroBck from '../../img/comicsHeader.jpg';
// import cb1 from '../../img/item1.jpg';
// import cb2 from '../../img/item2.jpg';
// import cb3 from '../../img/item3.jpg';
// import cb4 from '../../img/item4.jpg';
// import container from './container';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <>
        <section className="connect-with-us-row">
          <article className="row hp-social">
            <section className="large-4 columns">
              <h3>CONNECT WITH US</h3>
            </section>

            <section className="large-4 medium-12 columns">
              <ul className="tt-wrapper">
                <li>
                  <a href="https://www.facebook.com/scsprek" target="_blank" className="hp-social-icon">
                    <img id="facebook" alt="Facebook" src="http://www.scsk12.org/img/icons/silo/facebook i s w.png" alt="Facebook Icon" />
                    <span>Facebook</span>
                  </a>
                </li>
              </ul>
            </section>

            <section className="large-4 columns tccBTNWrap">
              <h3>
                {
                  // <span style="font-weight: normal;font-size: 1em;color: #FFF;
                  // text-align: center;text-transform:capitalize;margin-top: .5em"></span>
                }

                <a className="TCC-btn-hp" href="http://voiceofscs.com" target="_blank">
                  {
            //         <span style="
            // width: .1em;
            // height: 1.2em;
            // margin: .2em .5em 0 .5em;
            // padding: 0;
            // display: inline-block;"></span>
                  }

                  <i className="fa fa-film" aria-hidden="true" />
                  &nbsp;C19TV
                </a>

                {
          //         <span style="
          // width: .1em;
          // height: 1.2em;
          // margin: .2em .5em 0 .5em;
          // padding: 0;
          // display: inline-block;"></span>
                }

                <a className="TCC-btn-hp" href="http://voiceofscs.com/listen/" target="_blank">
                  <i className="fa fa-music" aria-hidden="true" />
                  &nbsp;88.5FM
                </a>
              </h3>
            </section>
          </article>
        </section>

        {
          // END CONNECT WITH US
        }

        {
          // FOOTER
        }
        <footer>
          <section className="top">
            <article className="row footer-graphic">
              <section className="medium-4 columns">
                <p>
                  <span>Shelby County Schools</span>
                  <br />
                  <span className="fi-marker" />
                  &nbsp;160 S. Hollywood St.
                  <br />
                  &nbsp;Memphis, TN 38112
                  <br />
                  &nbsp;Main:&nbsp;
                  <span className="fi-telephone" />
                  &nbsp;(901) 416-5300
                  <br />
                  &nbsp;Email:&nbsp;

                  <a href="mailto:scshelp@scsk12.org">
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <span> scshelp@scsk12.org</span>
                  </a>
                </p>
              </section>

              <section className="medium-4 columns scsSmallLogoWrap">
                <a href="http://www.scsk12.org/" target="_blank">
                  <figure className="scsSmallLogo">
                    <img src="http://www.scsk12.org/img/home-page/scs-log-small.png" alt="SCS Logo" />
                  </figure>
                </a>
              </section>
            </article>
          </section>

          <section className="bottom">
            <p>
              Shelby County Schools offers educational and employment&nbsp;
              opportunities without regard to race, color, religion, sex, creed,&nbsp;
              age, disability, national origin, or genetic information.
            </p>
          </section>
        </footer>
      </>
    );
  }
}

export default Footer;
