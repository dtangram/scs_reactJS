/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import PropTypes from 'prop-types';
import RRPropTypes from 'react-router-prop-types';
// import { HashLink as Link } from 'react-router-hash-link';
// import { Container, Row, Col } from 'reactstrap';
import { Link as a } from 'react-router-dom';
import ScrollBTN from '../scrollBTN';
// import Link from '../../link';
// import '../../css/main.css';
// import styles from './styles.module.css';
// import logo from '../../img/logo.png';
import downArr from '../../img/2019/downArr.png';
import prekImage1 from '../../img/2019/prekImage1.jpg';
import prekImage2 from '../../img/2019/prekImage2.jpg';
import prekImage3 from '../../img/2019/prekImage3.jpg';
import prekImage4 from '../../img/2019/prekImage4.jpg';
import prekImage5 from '../../img/2019/prekImage5.jpg';
import prekHeaderImage1 from '../../img/2019/prekHeaderImage1.jpg';
import prekHeaderImage2 from '../../img/2019/prekHeaderImage2.jpg';
import WEare901 from '../../img/2019/WEare901.png';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
    });

    // DOWN ARROW ANCHOR LINK
    const downArrScrollTo = (element) => {
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop,
      });
    };

    document.getElementById('downArr').addEventListener('click', () => {
      downArrScrollTo(document.getElementById('prekContainer'));
      // return false;
    });
  }

  render() {
    return (
      <>
        <ScrollBTN />
        {
          // POPUP
        }

        <article className="popupWrap">
          <section className="popup">
            <p className="popupCloseBTN popupCloseAnimation">Page is loading...</p>

            <button type="button" className="btnHide">Apply for Pre-K</button>
            <section className="prekPopupH3 popupAnimation">
              <p>
                2021-22 PRE-K APPLICATIONS OPEN MONDAY, MARCH 8!
                <br />
                <span className="italics">
                  Applications are still open for the current school year (2020-21).
                </span>
              </p>

              {
                // <figure>
                   // <img src="img/2021/2021-PREK-WEB.jpg"
                   // alt="Elementary school girl smiling at camera" />
                  // </figure>
              }

              <p>
                ¡APLICACIONES PARA PRE-KINDER PARA EL AÑO ESCOLAR
                2021-22 ABREN EL LUNES, 8 DE MARZO!
                <br />
                <span className="italics">
                  Las solicitudes todavía están abiertas
                  para el año escolar actual (2020-21).
                </span>
              </p>
            </section>
          </section>
        </article>

        <article id="bckWrap" className="large-12">
          <h1 className="larg-12 medium-12 small-12">
            Pre-K &
            <br />
            Head Start
            <figure className="graphic" alt="Small red, rectangle graphic." />
          </h1>

          {
            // PLAY AND PAUSE IMAGE CAROUSEL
          }
          <section className="playerControls">
            <button id="pause" type="button" className="controlsBTN"><i className="fas fa-pause controls" alt="Pause button" /></button>
            <button id="play" type="button" className="controlsBTN"><i className="fas fa-play controls" alt="Play button" /></button>
          </section>

          <section className="arrowCTRL">
            <button id="leftArr" type="button" className="arrows"><i className="fas fa-chevron-left controlsArr" alt="Left arrow to navigate to previous photo." /></button>
            <button id="rightArr" type="button" className="arrows"><i className="fas fa-chevron-right controlsArr" alt="Right arrow to navigate to next photo." /></button>
          </section>

          <figure id="downArr" className="large-12 medium-12 small-12"><img src={downArr} alt="Red arrow pointing down" /></figure>

          <section id="bck">
            <ul id="bckRotate">
              <li className="current"><img src={prekImage1} alt="Pre-K students holding letters that spell the word, learn" /></li>
              <li><img src={prekImage2} alt="Group of pre-k students with their teachers" /></li>
              <li><img src={prekImage3} alt="Pre-K girls sitting down" /></li>
              <li><img src={prekImage4} alt="Group of pre-k students with their teachers" /></li>
              <li><img src={prekImage5} alt="Pre-K students working on smart tablet" /></li>
            </ul>
          </section>
        </article>

        <article id="prekContainer">
          <section id="resizer" className="row">
            <article className="prekWrapper large-12 medium-12 small-12">
              <section className="large-12 prekIntro">
                <h2 className="prekH2">
                  Begin the Journey
                  <figure className="graphic" alt="Small red, rectangle graphic." />
                </h2>

                <p>
                  Is your 4-year-old future scholar ready to begin his or her education journey?
                  Begin the journey with SCS Pre-K! Our Pre-K program is one of the first
                  and most important steps families can take to ensure students are prepared
                  for success in Kindergarten and beyond. We serve approximately 5,000 students
                  each year at select elementary schools across Shelby County and multiple
                  community partner sites. Every year, Pre-K students score higher in Kindergarten
                  than many of their peers who did not take an early childhood program. Pre-K
                  students also routinely outperform District goals for foundational skills,
                  language and more.
                </p>
              </section>
            </article>
          </section>

          {
            // PRE-K SCREENINGS
          }
          <section id="screenings" className="prekCopyContainer large-12 medium-12 small-12">
            <h2 className="prekH2">
              Pre-K Application & Qualifications
              <figure className="graphic" alt="Small red, rectangle graphic." />
            </h2>

            <section className="prekWrapStart large-12 medium-12 small-12">
              <p className="prekPara">
                Online applications are now open for 2020-21 Pre-K classes.
                <br />
                <a href="https://registration.powerschool.com/family/gosnap.aspx?action=22536&culture=en" className="slideUnder" target="_blank">CLICK HERE TO APPLY.</a>
                <br />
                Las solicitudes en línea ahora están abiertas para las clases de pre-kinder 2020-21.
                <br />
                <a href="https://registration.powerschool.com/family/gosnap.aspx?action=22536&culture=es" className="slideUnder" target="_blank">HAGA CLÍC AQUÍ PARA APLICAR.</a>
              </p>

              <article className="large-5 medium-12 small-12 columns">
                <img src={prekHeaderImage1} alt="Pre-k team member at pre-k screening" className="headerImage1" />
                <h3 className="prekH3">
                  Pre-K/Head Start Eligibility
                </h3>

                <section>
                  <ul>
                    <li>
                      <span>
                        Age for Pre-K:&nbsp;
                      </span>
                      SCS Pre-K is open children in Shelby County who turn
                      4 years-old by August 15.
                    </li>

                    <li>
                      <span>
                        Age for Head Start:&nbsp;
                      </span>
                      Head Start is open to children in Shelby County who turn
                      3 years-old by August 15.
                    </li>

                    <li>
                      <span>Eligibility: </span>
                      Priority is given to “at-risk” students who meet&nbsp;
                      <a href="https://aspe.hhs.gov/poverty-guidelines" className="slideUnder" target="_blank">
                        Federal Poverty Guidelines
                      </a>
                      .
                    </li>

                    <li>
                      <span>Wait List: </span>
                      Students above the income eligibility requirement are
                      placed on a waiting list.
                    </li>

                    <li>
                      <span>Over-Income Placement: </span>
                      If Pre-K seats are available after September 30, a limited
                      number may be opened for students who are over income.
                    </li>

                    <li>
                      <span>Have questions? </span>
                      Call&nbsp;
                      <a href="tel:+19014163450" className="slideUnder">
                        (901) 416-3450
                      </a>
                      &nbsp;or email&nbsp;
                      <a href="mailto:prekregistration@scsk12.org" className="slideUnder">
                        prekregistration@scsk12.org
                      </a>
                      .
                    </li>
                  </ul>
                </section>
              </article>

              <article className="large-5 medium-12 small-12 columns">
                <img src={prekHeaderImage2} alt="Another pre-k team member at pre-k screening" className="headerImage2" />
                <h3 className="prekH3">
                  Application Checklist & Requirements
                </h3>

                <section>
                  <ul>
                    <li>
                      <span>Apply: </span>
                      Submit an&nbsp;
                      <a href="https://registration.powerschool.com/family/ActionForms/Public/22536" className="slideUnder" target="_blank">
                        online application
                      </a>
                      .
                      Please note, completing the application does not mean
                      the child is accepted. An eligibility appointment must
                      be scheduled to verify age, family income and other
                      household information.
                    </li>

                    <li>
                      <span>Eligibility Review: </span>
                      After applying, click the link on the confirmation screen
                      to schedule an appointment for an eligibility review or
                      request an interview by emailing&nbsp;
                      <a href="mailto:prekregistration@scsk12.org" className="slideUnder">
                        prekregistration@scsk12.org
                      </a>
                      .
                      *Due to COVID-19, interviews will be conducted by phone.
                    </li>

                    <li>
                      <span>Required Documents: </span>
                      View the&nbsp;
                      <a href="http://www.scsk12.org/prek/files/2020/ReadyforPrek2020.pdf" className="slideUnder" target="_blank">
                        list of required items
                      </a>
                      &nbsp;for the eligibility review.
                      (
                      <a
                        href="http://www.scsk12.org/prek/files/2020/ReadyforPrekSpanish2020.pdf"
                        className="slideUnder"
                        target="_blank"
                      >
                        Haga clic aquí para Español.
                      </a>
                      )
                      Documents can be submitted online with the application or emailed to&nbsp;
                      <a href="mailto:prekregistration@scsk12.org" className="slideUnder">
                        prekregistration@scsk12.org
                      </a>
                      .
                    </li>

                    <li>
                      <span>Acceptance: </span>
                      Emails will be sent to parents whose children meet
                      the eligibility requirements to confirm acceptance
                      into the program beginning May 26. Parents whose children
                      are not eligible will also receive an email.
                    </li>

                    <li>
                      <span>Orientation: </span>
                      Parents must attend mandatory orientation before the child
                      can begin attending className. Orientation will be scheduled
                      after schools reopen.
                    </li>

                    <li>
                      <span>FAQs: </span>
                      <a
                        href="https://docs.google.com/document/d/1h6mk7GTTGKgvzz-uOpd58mlDyJEwRPBn8RlvJOIDLbA/edit"
                        className="slideUnder"
                        target="_blank"
                      >
                        2020-21 Application FAQs
                      </a>
                      |
                      <a
                        href="https://docs.google.com/document/d/1FH4wxldwQJmdcGIuA-YbnXYRxuVROm3Cx1ZNutxhe64/edit"
                        className="slideUnder"
                        target="_blank"
                      >
                        2020-21 Datos Básicos Sobre La Solicitud
                      </a>
                    </li>
                  </ul>
                </section>
              </article>
            </section>

            <figure className="prekWrapStartBck" />
            <figure className="prekWrapStartOverlay" />
          </section>

          <section className="prekImg">
            <section className="large-12 medium-12 small-12">
              <h2 className="prekH2">Begin the Journey to College and Career Readiness!</h2>
              <figure className="img901 large-5 medium-7 small-10">
                <img src={WEare901} alt="Logo of WE are 901" className="img901 large-5 medium-7 small-10" />
              </figure>
            </section>
            <figure className="prekRequireBck" />
            <figure className="prekOverlay" />
          </section>
        </article>
      </>
    );
  }
}

// Home.propTypes = {
//   fetchALLSales: PropTypes.func.isRequired,
//   salesALL: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       // comicBookCover: PropTypes.string,
//       comicBookTitle: PropTypes.string,
//       comicBookVolume: PropTypes.number,
//       comicBookYear: PropTypes.number,
//       comicBookPublisher: PropTypes.string,
//       type: PropTypes.string,
//     }),
//   ),
//
//   user: PropTypes.shape({
//     id: PropTypes.string,
//     firstname: PropTypes.string,
//     username: PropTypes.string,
//     email: PropTypes.string,
//   }),
//   isLoading: PropTypes.bool.isRequired,
//   match: RRPropTypes.match.isRequired,
// };
//
// Home.defaultProps = {
//   salesALL: {},
//   user: {},
// };

export default Home;
