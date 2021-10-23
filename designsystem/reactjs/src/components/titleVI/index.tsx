/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import ScrollBTN from '../scrollBTN';

class TitleVI extends React.Component {
  constructor(props: string) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
    });

    localStorage.clear();

    const titleVI: string = 'titleVI';
    localStorage.setItem('titleVI', titleVI);

    const getLinks = document.querySelector('.parentLinks') as HTMLElement;
    const homeLink = getLinks.querySelector('li:nth-child(1)') as HTMLElement;

    homeLink.classList.remove('currentLink');
  }

  render() {
    return (
      <>
        <ScrollBTN />

        <main className="titleMain">
          <section>
            <article className="large-12 bckWrap">
              <h1 className="large-12 medium-12 small-12">
                Title VI
                <figure className="graphic" title="Small red, rectangle graphic." />
              </h1>
            </article>
          </section>

          <section className="introParagraph secWrap designsystemContainer">
            <h2>
              District Title VI
              <figure className="graphic" title="Small red, rectangle graphic." />
            </h2>

            <p>
              Our Title VI statement must appear on all publications and forms
              {' '}
              produced for external distribution, as well as all school and
              {' '}
              District websites. The statement should be set in 6- or 9-point
              {' '}
              type and centered on the back panel or back cover of each
              {' '}
              publication or at the bottom center of advertisements, flyers,
              {' '}
              web pages, etc.
            </p>

            <p>
              <span>English:</span>
              {' '}
              Shelby County Schools offers educational and employment
              {' '}
              opportunities without regard to race, color, religion, sex, creed,
              {' '}
              age, disability, national origin, or genetic information.
            </p>

            <p>
              <span>Spanish:</span>
              {' '}
              Las Escuelas del Condado Shelby ofrecen oportunidades educativas y
              {' '}
              de empleo sin distinción de raza, color, religión, sexo, credo,
              {' '}
              edad, discapacidad, origen nacional, o la información genética.
            </p>
          </section>
        </main>
      </>
    );
  }
}

export default TitleVI;
