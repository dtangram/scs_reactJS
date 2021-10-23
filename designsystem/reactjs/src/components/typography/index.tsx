/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Link as a } from 'react-router-dom';
import ScrollBTN from '../scrollBTN';

class Typography extends React.Component {
  constructor(props: string) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
    });

    localStorage.clear();

    const typography: string = 'typography';
    localStorage.setItem('typography', typography);

    const getLinks = document.querySelector('.parentLinks') as HTMLElement;
    const homeLink = getLinks.querySelector('li:nth-child(1)') as HTMLElement;

    homeLink.classList.remove('currentLink');
  }

  render() {
    return (
      <>
        <ScrollBTN />

        <main className="typoMain">
          <section>
            <article className="large-12 bckWrap">
              <h1 className="large-12 medium-12 small-12">
                Typography
                <figure className="graphic" title="Small red, rectangle graphic." />
              </h1>
            </article>
          </section>

          <section className="typeSecOne secWrap">
            <h2>
              SCS Typography
              <figure className="graphic" title="Small red, rectangle graphic." />
            </h2>

            <p>
              Our communications are most effective when there is consistency
              {' '}
              in content, as well as appearance. Readability is the most
              {' '}
              important consideration when selecting a font. Fonts should
              {' '}
              always be clean and professional and never distract from
              {' '}
              the message itself or compete with our visual identity. The type
              {' '}
              of font should always be selected based on the communication format.
            </p>
          </section>

          <section className="typoUse designsystemContainer lightgrayBCK">
            <h2>
              Typography Use
              <figure className="graphic" title="Small red, rectangle graphic." />
            </h2>

            <section className="panelWrap">
              <article>
                <p>
                  <span>Heading 1</span>
                </p>

                <p>
                  Font Family - Lora
                  <br />
                  Font Size - 7rem
                  <br />
                  Font Weight - Bold
                </p>
              </article>

              <hr />

              <article>
                <p>
                  <span>Heading 2</span>
                </p>

                <p>
                  Font Family - Open Sans (All Caps)
                  <br />
                  Font Size - 2.2rem
                  <br />
                  Font Weight - Bold
                </p>
              </article>

              <hr />

              <article>
                <p>
                  <span>Heading 3</span>
                </p>

                <p>
                  Font Family - Open Sans
                  <br />
                  Font Size - 1.2rem
                  <br />
                  Font Weight - Bold
                </p>
              </article>

              <hr />

              <article>
                <p>
                  <span>Body</span>
                </p>

                <p>
                  Font Family - Open Sans Condensed
                  <br />
                  Font Size - 1.6rem
                  <br />
                  Font Weight - Normal
                </p>
              </article>

              <hr />

              <article>
                <p>
                  <span>Panel Body</span>
                </p>

                <p>
                  Font Family - Open Sans
                  <br />
                  Font Size - 1rem
                  <br />
                  Font Weight - Normal
                </p>
              </article>
            </section>
          </section>
        </main>
      </>
    );
  }
}

export default Typography;
