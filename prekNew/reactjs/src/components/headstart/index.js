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

class Headstart extends React.Component {
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

        <article id="headStartWrap" className="prekImg large-12">
          <h1 className="larg-12 medium-12 small-12">
            Head Start
            <figure className="graphic" alt="Small red, rectangle graphic." />
          </h1>

          <figure className="overlayHeaderBCK" alt="Pre-k students in class with teacher" />
        </article>

        <article id="prekContainer" className="headstart">
          <section id="resizer" className="row">
            <article className="prekWrapper large-12 medium-12 small-12">
              <section className="large-12 prekIntro">
                <h2 className="prekH2">
                  Head Start Services
                  <figure className="graphic" alt="Small red, rectangle graphic." />
                </h2>

                <p>
                  Head Start promotes the school readiness of young children
                  &nbsp;from low-income families through agencies in their local
                  &nbsp;community. The Head Start program is authorized by the
                  &nbsp;Improving Head Start for School Readiness Act of 2007.
                </p>
              </section>
            </article>
          </section>

          <section>
            <section id="headStartSpaceLimit" className="spacelimit large-12 medium-12 small-12">
              <p className="large-6 medium-12 small-12 columns">
                The Head Start program provide comprehensive services to support
                &nbsp;the mental, social, and emotional development of children
                &nbsp;from birth to age 5. In addition to education services,
                &nbsp;programs provide children and their families with health,
                &nbsp;nutrition, social, and other services. Head Start services
                &nbsp;are responsive to each child and family&apos;s ethnic, cultural,
                &nbsp;and linguistic heritage.
              </p>

              <p className="large-6 medium-12 small-12 columns">
                Head Start encourages the role of parents as their child&apos;s first
                &nbsp;and most important teachers. Programs build relationships
                &nbsp;with families that support positive parent-child relationships,
                &nbsp;family well being, and connections to peers and community.
              </p>
            </section>
          </section>

          <section>
            <section className="grants prekIntro">
              <p className="large-12 medium-12 small-12">
                Local agencies receive grants from the U.S. Department of Health
                &nbsp;and Human Services (HHS). Head Start agencies design services
                for children and families that meet the needs of their local
                &nbsp;community and the Head Start Program Performance Standards.
                &nbsp;Some cities, states, and federal programs offer funding
                &nbsp;to expand Head Start to include more children within their
                &nbsp;communities.
              </p>
            </section>
          </section>

          <section className="prekCopyContainer large-12 medium-12 small-12">
            <h2 className="prekH2">
              What programs are offered by Head Start?
              <figure className="graphic" alt="Small red, rectangle graphic." />
            </h2>

            <section className="prekWrapStart large-12 medium-12 small-12">
              <article className="large-5 large-centered medium-12 small-12">
                <figure className="headerImage1"><img src={prekHeaderImage3} alt="Pre-k team member testing a child" /></figure>
                <h3 className="prekH3">Head Start</h3>

                <section>
                  <p>
                    Head Start began as a program for preschoolers. Three- and
                    &nbsp;4-year-old preschoolers made up over 80 percent of
                    &nbsp;the children served by Head Start last year.
                  </p>
                </section>
              </article>
            </section>

            <figure className="prekWrapStartBck" />
            <figure className="prekWrapStartOverlay" />
          </section>

          <section className="prekContain large-12 medium-12 small-12">
            <article className="prekIntro large-12 medium-12 small-12">
              <section>
                <p>
                  Head Start offers a variety of service models, depending on
                  &nbsp;the needs of the local community. The program may be
                  &nbsp;based in centers, schools, or family child care homes.
                  &nbsp;Head Start preschool services may be half-day
                  &nbsp;or full-day. Another program option is home-based
                  &nbsp;services, in which a staff person visits children once
                  &nbsp;a week in their own home and works with the parent
                  &nbsp;as the child&apos;s primary teacher. Children and
                  &nbsp;families who receive home-based services meet twice
                  &nbsp;monthly with other enrolled families for a group
                  &nbsp;learning experience facilitated by Head Start staff.
                </p>
              </section>
            </article>
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

export default Headstart;
