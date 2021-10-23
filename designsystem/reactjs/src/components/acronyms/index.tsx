/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import ScrollBTN from '../scrollBTN';

class Acronyms extends React.Component {
  constructor(props: string) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
    });

    localStorage.clear();

    const acronyms: string = 'acronyms';
    localStorage.setItem('acronyms', acronyms);

    const getLinks = document.querySelector('.parentLinks') as HTMLElement;
    const homeLink = getLinks.querySelector('li:nth-child(1)') as HTMLElement;

    homeLink.classList.remove('currentLink');
  }

  render() {
    return (
      <>
        <ScrollBTN />

        <main className="acroMain">
          <section>
            <article className="large-12 bckWrap">
              <h1 className="large-12 medium-12 small-12">
                Acronyms
                <figure className="graphic" title="Small red, rectangle graphic." />
              </h1>
            </article>
          </section>

          <section className="introParagraph secWrap">
            <h2>
              SCS Acronyms
              <figure className="graphic" title="Small red, rectangle graphic." />
            </h2>

            <p>
              All acronyms, even commonly used education acronyms, should be
              {' '}
              fully spelled out on first reference. The acronym should appear
              {' '}
              in parentheses on first reference and without parentheses thereafter.
            </p>

            <p className="italics">
              Ex: Students will participate in multiple Advanced Placement (AP)
              {' '}
              courses. SCS offers 45 AP courses.
            </p>
          </section>

          <section className="listContainer secWrap designsystemContainer">
            <h3>Commonly Used SCS Acronyms:</h3>

            <article className="large-12 medium-12 small-12 listWrap">
              <section className="large-4 medium-12 small-12 columns">
                <ul>
                  <li>AP – Advanced Placement</li>
                  <li>APTT – Academic Parent-Teacher Teams</li>
                  <li>ASD – Achievement School District</li>
                  <li>BOE – Board of Education</li>
                  <li>C.L.U.E. – Creative Learning in a Unique Environment</li>
                </ul>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <ul>
                  <li>CNC – Central Nutrition Center</li>
                  <li>CTE – Career and Technical Education</li>
                  <li>DACA – Deferred Action for Childhood Arrivals</li>
                  <li>DLD – District Learning Day</li>
                  <li>ELA – English/Language Arts</li>
                </ul>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <ul>
                  <li>EL – Expeditionary Learning</li>
                  <li>ELL – English Language Learner</li>
                  <li>EOC – End of Course</li>
                  <li>ESEA – Elementary and Secondary Education Act</li>
                  <li>ESL – English as a Second Language</li>
                </ul>
              </section>
            </article>
          </section>

          <section className="listContainer secWrap designsystemContainer">
            <article className="large-12 medium-12 small-12 listWrap">
              <section className="large-4 medium-12 small-12 columns">
                <ul>
                  <li>ESSA – Every Student Succeeds Act</li>
                  <li>E-Zone – Empowerment Zone</li>
                  <li>FAFSA – Federal Application for Federal Student Aid</li>
                  <li>ILD – Instructional Leadership Director</li>
                  <li>ILT – Instructional Learning Team</li>
                </ul>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <ul>
                  <li>IPG – Instructional Practice Guide</li>
                  <li>iZone – Innovation Zone</li>
                  <li>K – Kindergarten</li>
                  <li>MSCEA – Memphis Shelby County Education Association</li>
                  <li>NAEP – National Assessment of Educational Progress</li>
                </ul>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <ul>
                  <li>NTO – New Teacher Orientation</li>
                  <li>PD – Professional Development</li>
                  <li>PLC – Professional Learning Community</li>
                  <li>PLZ – Professional Learning Zone</li>
                  <li>Pre-K – Pre-Kindergarten</li>
                </ul>
              </section>
            </article>
          </section>

          <section className="listContainer secWrap designsystemContainer">
            <article className="large-12 medium-12 small-12 listWrap">
              <section className="large-4 medium-12 small-12 columns">
                <ul>
                  <li>RTI – Response to Intervention</li>
                  <li>SCBE – Shelby County Board of Education</li>
                  <li>SCS – Shelby County Schools</li>
                  <li>SCIAA – Shelby County Interscholastic Athletic Association</li>
                  <li>SPF – School Performance Framework</li>
                </ul>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <ul>
                  <li>STEAM – Science, Technology, Engineering, Arts and Mathematics</li>
                  <li>STEM – Science, Technology, Engineering and Mathematics</li>
                  <li>TCC – Telecommunications Center</li>
                  <li>TDOE – Tennessee Department of Education</li>
                  <li>TEM – Teacher Effectiveness Measure</li>
                  <li>TLA – Teaching and Learning Academy</li>
                </ul>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <ul>
                  <li>TSSAA – Tennessee Secondary School Athletic Association</li>
                  <li>T-STEM – Transportation, Science, Technology, Engineering and Mathematics</li>
                  <li>TTC - Technology Training Center</li>
                  <li>TDOE – Tennessee Department of Education</li>
                  <li>UEA – United Education Association</li>
                </ul>
              </section>
            </article>
          </section>
        </main>
      </>
    );
  }
}

export default Acronyms;
