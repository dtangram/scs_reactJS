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

class Environment extends React.Component {
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

        <article id="environmentWrap" className="prekImg large-12">
          <h1 className="larg-12 medium-12 small-12">
            Environment
            <figure className="graphic" alt="Small red, rectangle graphic." />
          </h1>

          <figure className="overlayHeaderBCK" alt="Group of pre-k students sitting" />
        </article>

        <article id="prekContainer" className="environment">
          {
            // start middle row
          }
          <section id="resizer" className="row">
            <article className="prekWrapper large-12 medium-12 small-12">
              <section className="large-12 prekIntro">
                <h2 className="prekH2">
                  Classroom Environment
                  <figure className="graphic" alt="Small red, rectangle graphic." />
                </h2>

                <p>
                  Each Pre-K classroom is well-equipped with labeled interest
                  &nbsp;areas to promote independence, foster decision-making
                  &nbsp;and encourage interaction with peers and adults in the
                  &nbsp;classroom. The interest areas are as follows: blocks,
                  &nbsp;dramatic play, art, library, science, listening,
                  &nbsp;manipulatives, computers and sand and water. A variety
                  &nbsp;of learning materials, books, and supplies are accessible
                  &nbsp;to the children and located on low shelves within each interest area.
                </p>

                <p>
                  The child friendly daily schedule is posted and reflects a
                  &nbsp;balance between the following types of activities:
                  &nbsp;teacher-directed and child initiated activities; active
                  &nbsp;and quiet times; large group, and small group activities
                  &nbsp;and independent activities; indoor and outdoor play times.
                </p>
              </section>
            </article>
          </section>

          <section className="newSection2">
            <section className="grants prekIntro">
              <h2 className="prekH2">
                DAILY SCHEDULE
                <figure className="graphic" alt="Small red, rectangle graphic." />
              </h2>

              <p className="large-12 medium-12 small-12">
                <span>
                  The child friendly daily schedule is posted and reflects a
                  &nbsp;balance between the following types of activities:
                </span>
              </p>

              <ul>
                <li>Teacher-directed and child initiated activities</li>
                <li>Active and quiet times</li>
                <li>Large group, and small group activities and independent activities</li>
                <li>Indoor and outdoor play times</li>
              </ul>
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

export default Environment;
