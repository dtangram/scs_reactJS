/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import ScrollBTN from '../scrollBTN';
import WEare901 from '../../img/2019/WEare901.png';

class Family extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
    });

    localStorage.clear();

    const family: string = 'family';
    localStorage.setItem('family', family);

    const getLinks = document.querySelector('.parentLinks');
    const homeLink = getLinks.querySelector('li:nth-child(1)');
    // const headerLink = getLinks.querySelector('li:nth-child(2)');

    homeLink.classList.remove('currentLink');
    // headerLink.classList.remove('currentLink');

    // if (homeLink.classList.contains('currentLink')) {
    //   homeLink.classList.remove('currentLink');
    // }
  }

  render() {
    return (
      <>
        <ScrollBTN />

        <article id="familyWrap" className="prekImg large-12">
          <h1 className="larg-12 medium-12 small-12">
            Family
            <br />
            Involvement
            <figure className="graphic" alt="Small red, rectangle graphic." />
          </h1>

          <figure className="overlayHeaderBCK" alt="Child kssing mother at pre-k screening" />
        </article>

        <article id="prekContainer" className="environment">
          {
            // start middle row
          }
          <section id="resizer" className="row">
            <article className="prekWrapper large-12 medium-12 small-12">
              <section className="large-12 prekIntro">
                <h2 className="prekH2">
                  Parents & Children Learning Together
                  <figure className="graphic" alt="Small red, rectangle graphic." />
                </h2>

                <p>
                  Parents and Children Learning Together (PCLT) is a federally
                  &nbsp;funded family literacy services program where parents
                  &nbsp;continue their education as their children gain literacy
                  &nbsp;skills; parents support each other in their development
                  &nbsp;as learners and parents. The term family literacy services
                  &nbsp;means services that are of sufficient intensity in terms
                  &nbsp;of hours, and sufficient duration, to make sustainable
                  &nbsp;changes in a family, and that integrate all of the
                  &nbsp;following activities:
                </p>

                <ul>
                  <li>Interactive Literacy activities between parents and their children</li>
                  <li>
                    Training for parents regarding how to be the primary
                    &nbsp;teacher for their children
                  </li>
                  <li>Parent Literacy training that leads to economic self-sufficiency</li>
                  <li>
                    An age appropriate education to prepare children
                    &nbsp;for success in school and life experiences
                  </li>
                </ul>
              </section>
            </article>
          </section>

          <section>
            <section id="familySpaceLimit" className="spacelimit large-12 medium-12 small-12">
              <p className="large-12 medium-12 small-12">
                The district&apos;s PCLT Program is guided by and Advisory Board of
                &nbsp;Key Collaborators representing a broad cross section of
                &nbsp;internal divisions and units; community agencies and
                &nbsp;organizations. These programs target Pre-K students and
                &nbsp;their families at Ridgeway Early Learning Center; Berclair,
                &nbsp;Egypt, Getwell, and South Park Elementary schools; as well
                &nbsp;as teen parents their children at the Adolescent Parenting
                &nbsp;Program (APP). Eligible families may receive services until
                &nbsp;their youngest child completes the 3rd grade.
              </p>
            </section>
          </section>

          <section className="prekContain large-12 medium-12 small-12">
            <article className="prekIntro large-12 medium-12 small-12">
              <section>
                <p>
                  Pre-K Families are also actively involved in all aspects of
                  &nbsp;the program. They are encouraged to volunteer in
                  &nbsp;child&apos;s classroom, go on field trips and assist with
                  &nbsp;classroom projects.
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

export default Family;
