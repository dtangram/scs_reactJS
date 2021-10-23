/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Link as a } from 'react-router-dom';
// import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ScrollBTN from '../scrollBTN';

class Photography extends React.Component {
  constructor(props: string) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
    });

    localStorage.clear();

    const photography: string = 'photography';
    localStorage.setItem('photography', photography);

    const getLinks = document.querySelector('.parentLinks') as HTMLElement;
    const homeLink = getLinks.querySelector('li:nth-child(1)') as HTMLElement;

    homeLink.classList.remove('currentLink');
  }

  render() {
    return (
      <>
        <ScrollBTN />

        <main className="photoWrap designsystemContainer">
          <section>
            <article className="large-12 bckWrap">
              <h1 className="large-12 medium-12 small-12">
                Photography
                <figure className="graphic" title="Small red, rectangle graphic." />
              </h1>
            </article>
          </section>

          <section className="introParagraph secWrap designsystemContainer">
            <h2>
              SCS Photography Guides
              <figure className="graphic" title="Small red, rectangle graphic." />
            </h2>

            <p>
              High quality images are important visual elements that can help
              {' '}
              make print and digital communications stand out. However, poor
              {' '}
              quality images can be distracting and compromise the credibility
              {' '}
              of a message or organization.
            </p>
          </section>

          <section className="photoUse lightgrayBCK">
            <article className="large-12 medium-12 small-12 panelWrapContain">
              <ul>
                <li>
                  Photos should always be taken with the highest possible
                  {' '}
                  resolution (300 dpi for photo).
                </li>

                <li>
                  <span>TIP:</span>
                  {' '}
                  iPhone users can use the HDR setting for
                  {' '}
                  high-resolution photos.
                </li>

                <li>
                  Blury, stretched, pixelated or poorly framed images should
                  {' '}
                  never be used.
                </li>
              </ul>

              <section className="large-4 medium-12 small-12 columns">
                <figure>
                  <img src="http://www.scsk12.org/designsystem/img/blur-pixel-image.jpg" alt="Unapproved blurry, pixelated image" />

                  <section>
                    <CancelIcon />
                    <figcaption>Blured/pixelated photo</figcaption>
                  </section>
                </figure>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <figure>
                  <img src="http://www.scsk12.org/designsystem/img/stretched-image.jpg" alt="Unapproved stretched image" />

                  <section>
                    <CancelIcon />
                    <figcaption>Stretched photo</figcaption>
                  </section>
                </figure>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <figure>
                  <img src="http://www.scsk12.org/designsystem/img/good-image.jpg" alt="Approved image" />

                  <section>
                    <CheckCircleIcon />
                    <figcaption>Approved photo</figcaption>
                  </section>
                </figure>
              </section>

              <ul>
                <li>
                  Never use images from external websites that are not
                  {' '}
                  copyright approved.
                </li>

                <li>
                  Always use images that accurately reflect the District or
                  {' '}
                  school (racial diversity, age, gender, etc.).
                </li>

                <li>
                  Always ensure students have proper parental consent to be
                  {' '}
                  included in photos that may be used for external purposes.
                </li>
              </ul>
            </article>
          </section>

          <section className="listContainer secWrap designsystemContainer">
            <article className="large-12 medium-12 small-12 listWrap">
              <h3>Need an image?</h3>
              <p>
                The Communications Department has a database of high quality
                {' '}
                images for use in communication materials. If you are interested
                {' '}
                in using one of our approved photos, please contact Graphic
                {' '}
                Services at
                {' '}
                <a href="tel:+19014165678" className="slideUnderBodyLink">(901) 416-5678</a>
                .
              </p>
            </article>
          </section>
        </main>
      </>
    );
  }
}

export default Photography;
