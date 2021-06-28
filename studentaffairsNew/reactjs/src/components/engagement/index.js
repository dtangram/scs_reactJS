/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import PropTypes from 'prop-types';
import RRPropTypes from 'react-router-prop-types';
import { Link as RRLink } from 'react-router-dom';
import ScrollBTN from '../scrollBTN';

class Engagement extends React.Component {
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

        <article id="engagementWrap" className="studentAffairsImg large-12">
          <h1 className="larg-12 medium-12 small-12">
            Engagement
            <figure className="graphic" alt="Small red, rectangle graphic." />
          </h1>

          <figure className="overlayHeaderBCK" alt="Group of pre-k students sitting" />
        </article>

        <article id="studentAffairsContainer" className="environment">
          {
            // start middle row
          }
          <section id="resizer" className="row">
            <article className="studentAffairsWrapper large-12 medium-12 small-12">
              <section className="large-12 studentAffairsIntro">
                <h2 className="studentAffairsH2">
                  What Do We Do
                  <figure className="graphic" alt="Small red, rectangle graphic." />
                </h2>

                <section className="large-4 medium-4 small-12 columns">
                  <p>
                    <span>
                      Student Leadership
                    </span>
                  </p>
                  <figure><img src="http://www.scsk12.org/studentaffairsNew/img/2020/StudentLeadership.JPG" alt="Leadership" /></figure>

                  <ul>
                    <li>Student Congress</li>
                    <li>Student Council</li>
                    <li>
                      Leadership Advisory Council
                      <br />
                      (Jr. School Board)
                    </li>
                    <li>Peer Mediation</li>
                    <li>88.5 &quot;Student Congress Speaks&quot;</li>
                  </ul>
                </section>

                <section className="large-4 medium-4 small-12 columns">
                  <p>
                    <span>
                      Student Engagement
                    </span>
                  </p>
                  <figure><img src="http://www.scsk12.org/studentaffairsNew/img/2020/studentCouncil.JPG" alt="Student Council" /></figure>

                  <ul>
                    <li>Student-Crisis Management</li>
                    <li>District-wide Spelling Bee</li>
                    <li>Students Storm the Hill</li>
                    <li>Student Voice Surveys</li>
                    <li>Voices of 2025 Student Ambassadors</li>
                    <li>DOSA Liaisons</li>
                    <li>DOSA Student Ambassadors</li>
                    <li>Mentorships</li>
                    <li>DOSA 20/20 Pop-up Pep Rallies</li>
                    <li>Professional Development</li>
                    <li>Restorative Justice</li>
                    <li>Drop-out Prevention</li>
                    <li>Military Salute</li>
                  </ul>
                </section>

                <section className="large-4 medium-4 small-12 columns">
                  <p>
                    <span>
                      Academic/Post-Secondary Readiness
                    </span>
                  </p>
                  <figure><img src="http://www.scsk12.org/studentaffairsNew/img/2020/FedEx.png" alt="Students at FedEx Logistics Academy" /></figure>

                  <ul>
                    <li>SAILS (Seamless Alignment and Integrated Learning Support)</li>
                    <li>NCAA Compliance</li>
                    <li>VAL/SAL Scholars Dinner</li>
                    <li>FedEx Logistics Academy</li>
                    <li>FedEx Career Expo</li>
                  </ul>
                </section>
              </section>
            </article>
          </section>

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

export default Engagement;
