/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import PropTypes from 'prop-types';
import RRPropTypes from 'react-router-prop-types';
import { Link as a } from 'react-router-dom';
import axios from 'axios';
import ScrollBTN from '../scrollBTN';

class Staff extends React.Component {
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

        <article id="staffWrap" className="studentAffairsImg large-12">
          <h1 className="larg-12 medium-12 small-12">
            This Is Us
            <figure className="graphic" alt="Small red, rectangle graphic." />
          </h1>

          <figure className="overlayHeaderBCK" alt="Team members" />
        </article>

        <article id="studentAffairsContainer" className="staff">
          {
            // start middle row
          }
          <section id="resizer" className="row">
            <article className="studentAffairsWrapper large-12 medium-12 small-12">
              <section className="large-12">
                <h2 className="studentAffairsH2">
                  STAFF
                  <figure className="graphic" alt="Small red, rectangle graphic." />
                </h2>

                <section className="staffSection large-12 medium-12 small-12">
                  <article className="large-5 medium-12 small-12 columns slideUnder">
                    <figure><img src="http://www.scsk12.org/studentaffairsNew/img/2020/staff02.jpg" alt="Billy J. Walker, Jr., Director" /></figure>
                    <p className="slideUnder">
                      Billy J. Walker, Jr., Director
                      <br />
                      <a href="mailto:walkerbj@scsk12.org">walkerbj@scsk12.org</a>
                    </p>
                  </article>
                </section>

                <section className="staffSection large-12 medium-12 small-12">
                  <article className="large-5 medium-12 small-12 columns slideUnder">
                    <figure><img src="http://www.scsk12.org/studentaffairsNew/img/2020/staff05.jpg" alt="Erma Carter, Manager" /></figure>
                    <p className="slideUnder">
                      Erma Carter, Manager
                      <br />
                      <a href="mailto:carterel@scsk12.org">carterel@scsk12.org</a>
                    </p>
                  </article>

                  <article className="large-5 medium-12 small-12 columns slideUnder">
                    <figure><img src="http://www.scsk12.org/studentaffairsNew/img/2020/staff01.jpg" alt="Janice McDaniel, Manager" /></figure>
                    <p className="slideUnder">
                      Janice McDaniel, Manager
                      <br />
                      <a href="mailto:johnsonjm2@scsk12.org">johnsonjm2@scsk12.org</a>
                    </p>
                  </article>
                </section>

                <section className="staffSection large-12 medium-12 small-12">
                  <article className="large-5 medium-12 small-12 columns slideUnder">
                    <figure><img src="http://www.scsk12.org/studentaffairsNew/img/2020/staff06.jpg" alt="Ronnie Johnson, Advisor" /></figure>
                    <p className="slideUnder">
                      Ronnie Johnson, Advisor
                      <br />
                      <a href="mailto:johnsonr11@scsk12.org">johnsonr11@scsk12.org</a>
                    </p>
                  </article>

                  <article className="large-5 medium-12 small-12 columns slideUnder">
                    <figure><img src="http://www.scsk12.org/studentaffairsNew/img/2020/staff07.jpg" alt="Santa Patton, Advisor" /></figure>
                    <p className="slideUnder">
                      Santa Patton, Advisor
                      <br />
                      <a href="mailto:pattonsm@scsk12.org">pattonsm@scsk12.org</a>
                    </p>
                  </article>
                </section>

                <section className="staffSection large-12 medium-12 small-12">
                  <article className="large-5 medium-12 small-12 columns slideUnder">
                    <figure><img src="http://www.scsk12.org/studentaffairsNew/img/2020/staff08.jpg" alt="Audrey Smith, Specialist" /></figure>
                    <p className="slideUnder">
                      Audrey Smith, Specialist
                      <br />
                      <a href="mailto:smitha7@scsk12.org">smitha7@scsk12.org</a>
                    </p>
                  </article>

                  <article className="large-5 medium-12 small-12 columns slideUnder">
                    <figure><img src="http://www.scsk12.org/studentaffairsNew/img/2020/staff12.jpg" alt="Sara AlWafai, Specialist" /></figure>
                    <p className="slideUnder">
                      Sara AlWafai, Specialist
                      <br />
                      <a href="mailto:ALWAFAISN@scsk12.org">ALWAFAISN@scsk12.org</a>
                    </p>
                  </article>
                </section>

                <section className="staffSection large-12 medium-12 small-12">
                  <article className="large-5 medium-12 small-12 columns slideUnder">
                    <figure><img src="http://www.scsk12.org/studentaffairsNew/img/2020/staff13.jpg" alt="Alisa Anderson, Specialist" /></figure>
                    <p className="slideUnder">
                      Alisa Anderson, Specialist
                      <br />
                      <a href="mailto:andersona5@scsk12.org">andersona5@scsk12.org</a>
                    </p>
                  </article>

                  <article className="large-5 medium-12 small-12 columns slideUnder">
                    <figure><img src="http://www.scsk12.org/studentaffairsNew/img/2020/staff11.jpg" alt="Olga I Perez Torres, Administrative Assistant" /></figure>
                    <p className="slideUnder">
                      Olga I Perez Torres, Administrative Assistant
                      <br />
                      <a href="mailto:pereztorresoi@scsk12.org">pereztorresoi@scsk12.org</a>
                    </p>
                  </article>
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

export default Staff;
