/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
// import { Container, Row, Col } from 'reactstrap';
import ScrollBTN from '../scrollBTN';
// import prekHeaderImage3 from '../../img/2019/prekHeaderImage3.jpg';
import WEare901 from '../../img/2019/WEare901.png';
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

class Readiness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
    });

    localStorage.clear();

    const readiness: string = 'readiness';
    localStorage.setItem('readiness', readiness);

    const getLinks = document.querySelector('.parentLinks');
    const homeLink = getLinks.querySelector('li:nth-child(1)');
    const headerLink = getLinks.querySelector('li:nth-child(2)');

    homeLink.classList.remove('currentLink');

    if (readiness) {
      headerLink.classList.add('currentLink');
    }
  }

  render() {
    return (
      <>
        <ScrollBTN />

        <article id="readinessWrap" className="prekImg large-12">
          <h1 className="larg-12 medium-12 small-12">
            School Readiness
            <figure className="graphic" alt="Small red, rectangle graphic." />
          </h1>

          <figure className="overlayHeaderBCK" alt="Pre-k students in class with teacher" />
        </article>

        <article id="prekContainer" className="readiness">
          {
            // start middle row
          }
          <section id="resizer" className="row">
            <article className="prekWrapper large-12 medium-12 small-12">
              <section className="large-12 prekIntro">
                <h2 className="prekH2">
                  What is school readiness?
                  <figure className="graphic" alt="Small red, rectangle graphic." />
                </h2>

                <p>
                  The Office of Head Start (OHS) defines school readiness as
                  &nbsp;children being ready for school, families ready to
                  &nbsp;support their children&apos;s learning, and schools ready
                  &nbsp;for the children who enter their doors.
                  &nbsp;Children&apos;s school readiness is measured by the skills
                  &nbsp;set out in the five domains of the Head Start Child
                  &nbsp;Development and Early Learning Framework:
                </p>

                <ul>
                  <li>Language and Literacy</li>
                  <li>Cognition and General Knowledge</li>
                  <li>Approaches to Learning</li>
                  <li>Physical Development and Health</li>
                  <li>Social and Emotional Development</li>
                </ul>
              </section>
            </article>
          </section>

          <section>
            <section id="readinessSpaceLimit" className="spacelimit large-12 medium-12 small-12">
              <p className="large-6 medium-6 small-12 columns">
                Families are engaged in their children&apos;s learning and development
                &nbsp;and are poised to support the lifelong success of their
                &nbsp;child. Head Start recognizes that parents are
                &nbsp;their children&apos;s primary teachers and advocates.
              </p>

              <p className="large-6 medium-6 small-12 columns end">
                Schools become ready for children when Head Start programs,
                &nbsp;parents, and schools work together to promote school
                &nbsp;readiness and engage families as their children make
                &nbsp;the transition to kindergarten. Learn more about&nbsp;
                <a
                  href="https://eclkc.ohs.acf.hhs.gov/school-readiness"
                  className="slideUnder"
                  target="_blank"
                  rel="noreferrer"
                >
                  school readiness
                </a>
                .
              </p>
            </section>
          </section>

          <section className="prekImg">
            <section className="large-12 medium-12 small-12">
              <h2 className="prekH2">
                Begin the Journey to College and Career Readiness!
              </h2>
              <figure className="img901 large-5 medium-7 small-10"><img src={WEare901} alt="Logo of WE are 901" /></figure>
            </section>
            <figure className="prekRequireBck" />
            <figure className="prekOverlay" />
          </section>
        </article>
      </>
    );
  }
}

export default Readiness;
