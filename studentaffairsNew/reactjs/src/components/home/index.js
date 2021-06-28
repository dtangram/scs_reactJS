/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import PropTypes from 'prop-types';
import RRPropTypes from 'react-router-prop-types';
import { Link as a } from 'react-router-dom';
import ScrollBTN from '../scrollBTN';

class Home extends React.Component {
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

        <article id="bckWrap" className="large-12">
          <h1 className="larg-12 medium-12 small-12">
            Student Affairs
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

          <section id="bck">
            <ul id="bckRotate">
              <li className="current" alt="Group of students standing with superintendent, and holding a certificate" />
              <li alt="Student affairs director reading to students" />
              <li alt="Students metting with superintendent and student affairs" />
              <li alt="Large group of students standing in front of building" />
            </ul>
          </section>
        </article>

        <article id="studentAffairsContainer">
          <section id="resizer" className="row">
            <article className="studentAffairsWrapper large-12 medium-12 small-12">
              <section className="large-12 studentAffairsIntro">
                <h2 className="studentAffairsH2">
                  Mission
                  <figure className="graphic" alt="Small red, rectangle graphic." />
                </h2>

                <p>
                  The Department of Student Affairs aspires to amplify student
                  &nbsp;voice in countering systemic inequalities, building civic
                  &nbsp;participation, community relationships, and influencing
                  &nbsp;decisions that impact their education.
                </p>
              </section>
            </article>
          </section>

          <section id="screenings" className="studentAffairsCopyContainer large-12 medium-12 small-12">
            <h2 className="studentAffairsH2">
              DOSA Pillars
              <figure className="graphic" alt="Small red, rectangle graphic." />
            </h2>

            <section className="studentAffairsWrapStart large-12 medium-12 small-12">
              <p className="studentAffairsPara">
                Restorative Justice and Drop-out Prevention
                <br />
                Student Social-Emotional Learning
              </p>

              <article className="large-4 medium-12 small-12 columns">
                <figure className="headerImage1"><img src="http://www.scsk12.org/studentaffairsNew/img/2020/studentAffairsHeaderImage1.jpg" alt="Group of students and teachers standing around table" /></figure>
                <h3 className="studentAffairsH3">
                  Pillar 1
                </h3>

                <section>
                  <ul>
                    <li>Academic Equity</li>
                    <li>Student Voice</li>
                  </ul>
                </section>
              </article>

              <article className="large-4 medium-12 small-12 columns">
                <figure className="headerImage2"><img src="http://www.scsk12.org/studentaffairsNew/img/2020/studentAffairsHeaderImage2.jpg" alt="Students standing and smiling for camera" /></figure>
                <h3 className="studentAffairsH3">
                  Pillar 2
                </h3>

                <section>
                  <ul>
                    <li>Student Engagement</li>
                    <li>Student Leadership</li>
                  </ul>
                </section>
              </article>

              <article className="large-4 medium-12 small-12 columns">
                <figure className="headerImage2"><img src="http://www.scsk12.org/studentaffairsNew/img/2020/studentAffairsHeaderImage3.jpg" alt="Students metting with the superintendent" /></figure>
                <h3 className="studentAffairsH3">
                  Pillar 3
                </h3>

                <section>
                  <ul>
                    <li>Early Literacy</li>
                    <li>Post-Secondary Readiness</li>
                  </ul>
                </section>
              </article>
            </section>

            <figure className="studentAffairsWrapStartBck" alt="Students in mock court" />
            <figure className="studentAffairsWrapStartOverlay" />
          </section>

          <article id="studentAffairsSpaceLimit">
            <section className="row">
              <article className="studentAffairsWrapper large-12 medium-12 small-12">
                <section className="large-12 studentAffairsIntro">
                  <h2 className="studentAffairsH2">
                    Vision
                    <figure className="graphic" alt="Small red, rectangle graphic." />
                  </h2>

                  <p>
                    The vision of the Department of Student Affairs is to empower
                    &nbsp;students with optimal opportunities to augment their academic
                    &nbsp;experience and shape (or enhance) their foundational journey
                    &nbsp;in education. The creation of innovative, student-centered
                    &nbsp;programs and services will cultivate informed, engaged, and
                    &nbsp;culturally responsive citizens.
                  </p>
                </section>
              </article>
            </section>
          </article>

          <section className="studentAffairsFooterImg">
            <article className="large-12 medium-12 small-12">
              <h2 className="studentAffairsH2">
                “We hear students...We are here for students”
              </h2>
              <figure className="img901 large-5 medium-7 small-10"><img src="http://www.scsk12.org/studentaffairsNew/img/2020/WEare901.png" alt="Logo of WE are 901" /></figure>
            </article>
            <figure className="studentAffairsRequireBck" alt="Director of student affairs with students holding books" />
            <figure className="overlayHeaderBCK" />
          </section>
        </article>
      </>
    );
  }
}

export default Home;
