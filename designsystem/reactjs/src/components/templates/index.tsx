/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Link as a } from 'react-router-dom';
import GetAppIcon from '@material-ui/icons/GetApp';
import ScrollBTN from '../scrollBTN';

class Templates extends React.Component {
  constructor(props: string) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
    });

    localStorage.clear();

    const templates: string = 'templates';
    localStorage.setItem('templates', templates);

    const getLinks = document.querySelector('.parentLinks') as HTMLElement;
    const homeLink = getLinks.querySelector('li:nth-child(1)') as HTMLElement;

    homeLink.classList.remove('currentLink');
  }

  render() {
    return (
      <>
        <ScrollBTN />

        <main className="tempMain">
          <section>
            <article className="large-12 bckWrap">
              <h1 className="large-12 medium-12 small-12">
                Templates
                <figure className="graphic" title="Small red, rectangle graphic." />
              </h1>
            </article>
          </section>

          <section className="introParagraph secWrap designsystemContainer">
            <h2>
              District Templates
              <figure className="graphic" title="Small red, rectangle graphic." />
            </h2>

            <p>
              When our employees present information to any audience, they are
              {' '}
              representing our District.
            </p>

            <p>
              We have developed two PowerPoint presentation templates that
              {' '}
              uphold our brand identity, including approved colors, logo use,
              {' '}
              fonts and images.
            </p>

            <article className="large-12 medium-12 small-12 panelWrapContain">
              <section className="large-6 medium-12 small-12 columns">
                <figure>
                  <img src="http://www.scsk12.org/designsystem/img/pp3.png" alt="Unapproved blurry, pixelated image" />

                  <figcaption>Standard Template</figcaption>
                </figure>

                <button type="submit" name="scsReimagineLogos" title="Download SCS email image" className="downloadBTN">
                  <a href="http://www.scsk12.org//communications/files/2021/PRESENTATION-3%20(1).pptx">
                    <figure>
                      <GetAppIcon />
                    </figure>

                    Download
                  </a>
                </button>
              </section>

              <section className="large-6 medium-12 small-12 columns">
                <figure>
                  <img src="http://www.scsk12.org/designsystem/img/re901-ppt.png" alt="Unapproved stretched image" />

                  <figcaption>Custom Campaign Template</figcaption>
                </figure>

                <button type="submit" name="scsReimagineLogos" title="Download SCS email image" className="downloadBTN">
                  <a href="http://www.scsk12.org//communications/files/2021/Reimagining%20901-PPT.pptx">
                    <figure>
                      <GetAppIcon />
                    </figure>

                    Download
                  </a>
                </button>
              </section>
            </article>
          </section>

          <section className="listContainer secWrap designsystemContainer">
            <h3>Tips for effective presentations:</h3>

            <article className="large-12 medium-12 small-12 listWrap">
              <ul>
                <li>
                  A PowerPoint should be a summary of key points, not a full
                  {' '}
                  report. The presenter can always add more detail verbally.
                </li>

                <li>
                  Text should be as large as possible so it can be read easily.
                  {' '}
                  We recommend using 20pt font or larger for slides and at least
                  {' '}
                  32pt for headings whenever possible.
                </li>

                <li>
                  Consistent fonts and colors should be used throughout the presentation.
                </li>

                <li>
                  Limit slides to 4-6 concise bullets (one thought per bullet).
                </li>

                <li>
                  Avoid complex, hard-to-read charts (summarize key points; divide
                  {' '}
                  charts into larger, more readable sections).
                </li>

                <li>
                  Use high-contrast colors for optimal visibility (light colors do
                  {' '}
                  not present well).
                </li>

                <li>
                  Spell check and test your slideshow before presenting.
                </li>
              </ul>

              <p>
                <span>
                  Have a special event or initiative that may require a
                  {' '}
                  custom template?
                </span>
                {' '}
                Contact Graphic Services at
                {' '}
                <a href="tel:+19014165678" className="slideUnderBodyLink">(901) 416-5678</a>
                {' '}
                to determine if a custom
                {' '}
                design is appropriate and submit a project request for the
                {' '}
                template design.
              </p>
            </article>
          </section>
        </main>
      </>
    );
  }
}

export default Templates;
