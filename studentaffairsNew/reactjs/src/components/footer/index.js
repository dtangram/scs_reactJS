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
                  <a href="https://www.facebook.com/SCSDOSA901" target="_blank" className="hp-social-icon">
                    <img id="facebook" alt="Facebook" src="http://www.scsk12.org/img/icons/silo/facebook i s w.png" alt="Facebook Icon" />
                    <span>Facebook</span>
                  </a>
                </li>

                <li>
                  <a href="https://twitter.com/scsdosa?lang=en" target="_blank" className="hp-social-icon">
                    <img id="twitter" alt="Twitter icon" src="http://www.scsk12.org/img/icons/silo/twitter i s w.png" />
                    <span>Twitter</span>
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/scs_studentaffairs/" target="_blank" className="hp-social-icon">
                    <img id="instagram" alt="Instagram icon" src="http://www.scsk12.org/img/icons/silo/instagram i s w.png" />
                    <span>Instagram</span>
                  </a>
                </li>

                <li>
                  <a href="https://www.youtube.com/channel/UCgM423GixMxfVa2VcbXL9qg/videos" target="_blank" className="hp-social-icon">
                    <img id="youtube" alt="YouTube" src="http://www.scsk12.org/img/icons/silo/youtube i s w.png" />
                    <span>Youtube</span>
                  </a>
                </li>
              </ul>
            </section>

            <section className="large-4 columns tccBTNWrap">
              <h3>
                <a className="TCC-btn-hp" href="http://voiceofscs.com" target="_blank">
                  <i className="fa fa-film" aria-hidden="true" />
                  &nbsp;C19TV
                </a>

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
              <section className="large-4 medium-4 columns">
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

              <section className="large-4 medium-4 columns">
                <p>
                  <span>Student Affairs</span>
                  <br />
                  <span className="fi-marker" />
                  &nbsp;703 S Greer, Building D
                  <br />
                  Memphis, TN 38112
                  <br />
                  Main:
                  &nbsp;
                  <span className="fi-telephone" />
                  &nbsp;
                  <a href="tel:+19014164874">(901) 416-4874</a>
                  <br />
                  Fax: (901) 416-4854
                </p>
              </section>

              <section className="large-4 medium-4 columns scsSmallLogoWrap">
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
