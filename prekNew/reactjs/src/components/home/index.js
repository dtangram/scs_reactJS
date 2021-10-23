/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Link as a } from 'react-router-dom';
import ScrollBTN from '../scrollBTN';
import ImgSlider from '../imgSlider';
import Popup from '../popup';
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

    const downArrEle = document.querySelector('#downArr');
    const bck = document.querySelector('#bck');

    window.addEventListener('scroll', (event) => {
      if (window.scrollY > 950) {
        downArrEle.style.cssText = 'opacity: 0; display: none; transition: opacity 500ms, display 500ms ease-in-out;';
        bck.style.cssText = 'opacity: 0; display: none; transition: opacity 500ms, display 500ms ease-in-out;';
      }

      if (window.scrollY < 950) {
        downArrEle.style.cssText = 'opacity: 1; display: flex; transition: opacity 200ms, display 200ms ease-in-out;';
        bck.style.cssText = 'opacity: .5; display: block; transition: opacity 200ms, display 200ms ease-in-out;';
      }
    });
  }

  render() {
    return (
      <>
        <ScrollBTN />
        <Popup />
        <ImgSlider />

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
