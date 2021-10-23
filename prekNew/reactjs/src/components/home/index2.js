/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Link as a } from 'react-router-dom';
import ScrollBTN from '../scrollBTN';
import popupImage from '../../img/2021/PRE-K-BANNER-ENG.jpg';
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
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
    });

    localStorage.clear();

    const home: string = 'home';
    localStorage.setItem('home', home);

    const getHome = localStorage.getItem('home');
    const getLinks = document.querySelector('.parentLinks');
    const homeLink = getLinks.querySelector('li:nth-child(1)');

    if (getHome) {
      homeLink.classList.add('currentLink');
    }

    if (!getHome) {
      homeLink.classList.remove('currentLink');
    }

    // POPUP
    const popup = document.querySelector('.popup');
    const popH3 = document.querySelector('.popup > section');
    const popH3Link = document.querySelector('.popup > section p:nth-child(1)');
    const pageLoading = document.querySelector('.popup > p:nth-child(1)');
    const close = document.querySelector('.popup > button');
    const alertLinkWrap = document.querySelector('.alertLinkWrap');

    if (navigator.userAgent.indexOf('Firefox') !== -1) {
      document.querySelector('.popupCloseBTN').style.cssText = 'left: 0; transform: translate(0, 0);';
    }

    if (navigator.userAgent.indexOf('Edge') !== -1 || navigator.userAgent.indexOf('IE') !== -1) {
      document.querySelector('#downArr img').style.cssText = 'height: 25px; width: 40px';
    }

    window.addEventListener('load', (event) => {
      if (navigator.appVersion.indexOf('Mac') !== -1) {
        document.getElementById('bckRotate').style.margin = '0';
      }

      const popClose = document.querySelectorAll('.popup, .popup > button');
      for (let i = 0; i < popClose.length; i += 1) {
        const popCloseScrollTo = (element) => {
          window.scroll({
            behavior: 'smooth',
            left: 0,
            top: element.offsetTop,
          });
        };

        popClose[i].addEventListener('click', () => {
          popCloseScrollTo(document.getElementById('screenings'));
          close.style.cssText = 'opacity: 0; margin-top: -200px; transition: opacity 500ms, margin-top 500ms ease-in-out;';
          popup.style.cssText = 'opacity: 0; transition: opacity 500ms ease-in-out;';
          setTimeout(() => {
            popup.style.display = 'none';
          }, 500);

          // setTimeout(() => {
          //   close.style.cssText = 'opacity: 0; margin-top: -200;
          // transition: opacity 500ms, margin-top 500ms ease-in-out;';
          //   setTimeout(() => {
          //     popup.style.cssText = 'opacity: 0; transition: opacity 500ms ease-in-out;';
          //     setTimeout(() => {
          //       popup.style.display = 'none';
          //     }, 500);
          //   }, 500);
          // }, 500);

          popH3.style.cssText = 'opacity: 0; margin-top: -100px; transition: opacity 500ms, margin-top 500ms ease-in-out;';
          popup.style.cssText = 'opacity: 0; transition: opacity 500ms ease-in-out;';
          setTimeout(() => {
            popup.style.display = 'none';
          }, 500);
        });
      }
      //

      const bodyHTML = document.querySelectorAll('html, body');

      popH3Link.addEventListener('click', () => {
        window.open('http://www.scsk12.org/newsroom/#/article/1621');

        const bodyHTMLScrollTo = (element) => {
          window.scroll({
            behavior: 'smooth',
            left: 0,
            top: element.offsetTop,
          });
        };

        for (let i = 0; i < bodyHTML.length; i += 1) {
          bodyHTML[i].addEventListener('click', () => {
            bodyHTMLScrollTo(document.querySelector('.popup'));
          });
        }
      });

      const bodyHTMLScrollTo = (element) => {
        window.scroll({
          behavior: 'smooth',
          left: 0,
          top: element.offsetTop - 100,
        });
      };

      popup.addEventListener('click', () => {
        bodyHTMLScrollTo(document.querySelector('#screenings'));
        alertLinkWrap.style.cssText = 'display: block; opacity: 1; transition: opacity 1000ms ease-in-out;';
      });

      const closeBTNSetTime = () => {
        setTimeout(() => {
          close.classList.remove('btnHide');
          close.style.cssText = 'opacity: 1; transition: opacity 500ms ease-in-out;';
          close.classList.add('popupCloseBTN');
        }, 100);
      };

      pageLoading.style.cssText = 'opacity: 0; transition: opacity 700ms ease-in-out;';
      setTimeout(() => {
        pageLoading.classList.remove('popupCloseBTN', 'popupCloseAnimation');
        pageLoading.classList.add('loading');
        pageLoading.style.cssText = 'opacity: 0; transition: opacity 5000ms ease-in-out;';
        pageLoading.style.display = 'none';
        closeBTNSetTime();
      }, 700);

      if (close.style.opacity === '1') {
        clearTimeout(closeBTNSetTime);
      }
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
      downArrScrollTo(document.getElementById('screenings'));
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
              <p className="slideUnder">
                <a
                  href="http://www.scsk12.org/newsroom/#/article/1621"
                  target="_blank"
                  rel="noreferrer"
                >
                  ATTN. PORTER-LEATH FAMILIES:
                  <br />
                  CLICK HERE TO LEARN OUR PLANS TO ENSURE YOU HAVE ACCESS
                  {' '}
                  TO HIGH-QUALITY PRE-K EDUCATION WITH SCS.
                </a>
              </p>

              <p>
                2021-22 PRE-K APPLICATIONS ARE NOW OPEN!
                <br />
                <span className="italics">Review eligibility info & apply!</span>
              </p>

              <figure><img src={popupImage} alt="Boy student smiling at camera" /></figure>

              <p>
                ¡LAS SOLICITUDES DE PRE-K PARA EL AÑO 2021-22 YA ESTÁN ABIERTAS!
                <br />
                <span className="italics">Revise la información de elegibilidad y aplique.</span>
              </p>
            </section>
          </section>
        </article>

        <article id="bckWrap" className="large-12">
          <section className="playerControls">
            <button id="pause" type="button" className="controlsBTN"><i className="fas fa-pause controls" alt="Pause button" /></button>
            <button id="play" type="button" className="controlsBTN"><i className="fas fa-play controls" alt="Play button" /></button>
          </section>

          <article className="alertLinkWrap">
            <p className="slideUnder alertLink">
              <a
                href="http://www.scsk12.org/newsroom/#/article/1621"
                target="_blank"
                rel="noreferrer"
              >
                ATTN. PORTER-LEATH FAMILIES:
                <br />
                CLICK HERE TO LEARN OUR PLANS TO ENSURE YOU HAVE ACCESS
                {' '}
                TO HIGH-QUALITY PRE-K EDUCATION WITH SCS.
              </a>
            </p>
          </article>

          <h1 className="larg-12 medium-12 small-12">
            Pre-K &
            <br />
            Head Start
            <figure className="graphic" alt="Small red, rectangle graphic." />
          </h1>

          {
            // PLAY AND PAUSE IMAGE CAROUSEL
          }

          <section className="arrowCTRL">
            <button id="leftArr" type="button" className="arrows"><i className="fas fa-chevron-left controlsArr" alt="Left arrow to navigate to previous photo." /></button>
            <button id="rightArr" type="button" className="arrows"><i className="fas fa-chevron-right controlsArr" alt="Right arrow to navigate to next photo." /></button>
          </section>

          <figure id="downArr" className="large-12 medium-12 small-12">
            <figcaption>Apply for Pre-K</figcaption>
            <img src={downArr} alt="Red arrow pointing down" />
          </figure>

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
                <a
                  href="https://registration.powerschool.com/family/gosnap.aspx?action=22536&culture=en"
                  className="slideUnder"
                  target="_blank"
                  rel="noreferrer"
                >
                  CLICK HERE TO APPLY.
                </a>
                <br />
                Las solicitudes en línea ahora están abiertas para las clases de pre-kinder 2020-21.
                <br />
                <a
                  href="https://registration.powerschool.com/family/gosnap.aspx?action=22536&culture=es"
                  className="slideUnder"
                  target="_blank"
                  rel="noreferrer"
                >
                  HAGA CLÍC AQUÍ PARA APLICAR.
                </a>
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
                      <a
                        href="https://aspe.hhs.gov/poverty-guidelines"
                        className="slideUnder"
                        target="_blank"
                        rel="noreferrer"
                      >
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
                      <a
                        href="https://registration.powerschool.com/family/ActionForms/Public/22536"
                        className="slideUnder"
                        target="_blank"
                        rel="noreferrer"
                      >
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
                      <a
                        href="http://www.scsk12.org/prek/files/2020/ReadyforPrek2020.pdf"
                        className="slideUnder"
                        target="_blank"
                        rel="noreferrer"
                      >
                        list of required items
                      </a>
                      &nbsp;for the eligibility review.
                      (
                      <a
                        href="http://www.scsk12.org/prek/files/2020/ReadyforPrekSpanish2020.pdf"
                        className="slideUnder"
                        target="_blank"
                        rel="noreferrer"
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
                        rel="noreferrer"
                      >
                        2020-21 Application FAQs
                      </a>
                      |
                      <a
                        href="https://docs.google.com/document/d/1FH4wxldwQJmdcGIuA-YbnXYRxuVROm3Cx1ZNutxhe64/edit"
                        className="slideUnder"
                        target="_blank"
                        rel="noreferrer"
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
