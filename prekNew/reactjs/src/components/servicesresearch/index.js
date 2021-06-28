/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import PropTypes from 'prop-types';
import RRPropTypes from 'react-router-prop-types';
// import { HashLink as Link } from 'react-router-hash-link';
// import { Container, Row, Col } from 'reactstrap';
import { Link as RRLink } from 'react-router-dom';
import ScrollBTN from '../scrollBTN';
import prekHeaderImage3 from '../../img/2019/prekHeaderImage3.jpg';
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

class ServicesResearch extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
    });
  }

  render() {
    return (
      <>
        <ScrollBTN />

        <article id="servicesresearchWrap" className="prekImg large-12">
          <h1 className="larg-12 medium-12 small-12">
            Services,
            <br />
            Research
            <figure className="graphic" alt="Small red, rectangle graphic." />
          </h1>

          <figure className="overlayHeaderBCK" alt="Pre-k students in class with teacher" />
        </article>

        <article id="prekContainer" className="servicesresearch">
          {
            // start middle row
          }
          <section id="resizer" className="row">
            <article className="prekWrapper large-12 medium-12 small-12">
              <section className="large-12 prekIntro">
                <h2 className="prekH2">
                  What are comprehensive services?
                  <figure className="graphic" alt="Small red, rectangle graphic." />
                </h2>

                <p>
                  Head Start comprehensive services include:
                </p>

                <ul>
                  <li>Education</li>
                  <li>Screenings and follow-up for health, development, and behavior</li>
                  <li>Health and safety</li>
                  <li>Social and emotional health</li>
                  <li>Nutrition</li>
                  <li>Family goal-setting</li>
                  <li>Social services</li>
                  <li>Transition services</li>
                  <li>Services for children with disabilities</li>
                </ul>
              </section>
            </article>
          </section>

          <section>
            <section id="servicesresearchSpaceLimit" className="spacelimit large-12 medium-12 small-12">
              <p>
                Comprehensive services are delivered in a learning environment
                &nbsp;that is individualized to support children&apos;s growth in the
                &nbsp;five essential domains. A minimum of 10 percent of a
                &nbsp;program&apos;s total enrollment must be children with
                &nbsp;disabilities. Additionally, Head Start services are
                &nbsp;designed to be responsive to each child and family&apos;s
                &nbsp;ethnic, cultural, and linguistic heritage.
              </p>
            </section>
          </section>

          <section className="newSection">
            <section className="grants prekIntro">
              <h2 className="prekH2">
                How many children and families receive services?
                <figure className="graphic" alt="Small red, rectangle graphic." />
              </h2>

              <p className="large-12 medium-12 small-12">
                Over a million children are served by Head Start programs every year,
                including children in every U.S. state and territory and in
                &nbsp;American Indian and Alaska Native (AIAN) communities. In
                &nbsp;fiscal year (FY) 2013:
              </p>

              <br />

              <ul>
                <li>Head Start programs served 932,164 children and their families.</li>
                <li>
                  Early Head Start programs served 150,100 children and 6,391
                  &nbsp;pregnant women and their families.
                </li>
                <li>
                  Migrant and Seasonal Head Start (MSHS), which serves children
                  &nbsp;from birth to age 5, served an additional 31,907 children.
                </li>
                <li>
                  AIAN programs served 21,055 Head Start children, 4,240 Early
                  &nbsp;Head Start children, and 482 pregnant women and their families.
                </li>
              </ul>

              <p>
                View&nbsp;
                <a
                  href="https://eclkc.ohs.acf.hhs.gov/about-us/article/head-start-program-facts"
                  target="_blank"
                >
                  Head Start fact sheets
                </a>
                &nbsp;to learn more about demographics, state allocations,
                &nbsp;program statistics, and general information on Head Start
                &nbsp;enrollment history.
              </p>
            </section>
          </section>

          <section className="newSection2">
            <section className="grants prekIntro">
              <h2 className="prekH2">
                What Head Start research is conducted by HHS?
                <figure className="graphic" alt="Small red, rectangle graphic." />
              </h2>

              <p className="large-12 medium-12 small-12">
                HHS commissions research to better understand the different
                &nbsp;variations in programs and to guide program improvement in
                &nbsp;both Head Start and Early Head Start. For example, Head
                &nbsp;Start Family and Child Experiences Survey (FACES) and Baby
                &nbsp;FACES provide a picture of children&apos;s development and
                &nbsp;academic readiness over their time in Head Start and Early
                &nbsp;Head Start. HHS also commissions shorter term studies
                &nbsp;such as the Head Start CARES project, which compared
                &nbsp;different curricula directed at social and emotional
                &nbsp;development. Learn more about recent research and
                &nbsp;projects on Head Start and Early Head Start.
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

export default ServicesResearch;
