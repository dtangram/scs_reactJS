/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
// import { Link as a } from 'react-router-dom';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
// import TextFieldsIcon from '@material-ui/icons/TextFields';
import PaletteIcon from '@material-ui/icons/Palette';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LanguageIcon from '@material-ui/icons/Language';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import PhotoIcon from '@material-ui/icons/Photo';
import ComputerIcon from '@material-ui/icons/Computer';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import DescriptionIcon from '@material-ui/icons/Description';
import ScrollBTN from '../scrollBTN';

// interface EspanolString {
//   espanolContent: string;
//   rotateBCK: string;
//   rotateBCK2: string;
//   rotateBCK3: string;
//   matLinks: string;
//   servLinks: string;
//   recLinks: string;
// }

class Home extends React.Component {
  constructor(props: string) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
    });

    localStorage.clear();

    const home: string = 'home';
    localStorage.setItem('home', home);

    // const localStorageRemove = ['typography', 'logo'];
    //
    // localStorageRemove.map((items) => {
    //   localStorage.removeItem(items);
    // });

    const getHome = localStorage.getItem('home');
    const getLinks = document.querySelector('.parentLinks') as HTMLElement;
    const homeLink = getLinks.querySelector('li:nth-child(1)') as HTMLElement;

    if (getHome) {
      homeLink.classList.add('currentLink');
    }

    if (!getHome) {
      homeLink.classList.remove('currentLink');
    }

    const panelArticle = document.querySelectorAll('.articlePanel') as NodeListOf<HTMLElement>;

    if (panelArticle) {
      for (let i: number = 0; i < panelArticle.length; i += 1) {
        const secH3 = panelArticle[i].querySelector('section h3') as HTMLElement;
        const icon = secH3.querySelector('figure .MuiSvgIcon-root') as HTMLElement;

        const hoverEffect = (
          artPanel: HTMLElement,
          h3Sec: HTMLElement,
          h3Icon: HTMLElement,
          bckColor: string,
          bshad: string,
          colorH3Icon: string,
        ) => {
          let hoverFunc: any;

          const hoverObj = {
            artPanel,
            h3Sec,
            h3Icon,
            bckColor,
            bshad,
            colorH3Icon,
            hoverFunc,
          };

          hoverObj.hoverFunc = () => {
            hoverObj.artPanel.style.backgroundColor = hoverObj.bckColor;
            hoverObj.artPanel.style.boxShadow = hoverObj.bshad;
            hoverObj.artPanel.style.transition = 'background-color 300ms, box-shadow 300ms ease-in-out';

            hoverObj.h3Sec.style.color = hoverObj.colorH3Icon;
            hoverObj.h3Sec.style.transition = 'color 300ms ease-in-out';

            hoverObj.h3Icon.style.color = hoverObj.colorH3Icon;
            hoverObj.h3Icon.style.transition = 'color 300ms ease-in-out';
          };

          return hoverObj;
        };

        const mouseoverArticle = () => {
          const effectMouseover = hoverEffect(
            panelArticle[i],
            secH3,
            icon,
            '#EAE8E8',
            '0 3px 10px rgb(0 0 0 / 0.2)',
            '#F7DA47',
          );

          effectMouseover.hoverFunc();
        };

        const mouseoutArticle = () => {
          const effectMouseout = hoverEffect(
            panelArticle[i],
            secH3,
            icon,
            '#FFF',
            'none',
            '#FFF',
          );

          effectMouseout.hoverFunc();
        };

        panelArticle[i].addEventListener('mouseover', mouseoverArticle);
        panelArticle[i].addEventListener('mouseout', mouseoutArticle);
      }
    }
  }

  render() {
    return (
      <>
        <ScrollBTN />

        <main className="homeMain">
          <section>
            <article className="large-12 bckWrap">
              <h1 className="large-12 medium-12 small-12">
                SCS Design System
                <figure className="graphic" title="Small red, rectangle graphic." />
              </h1>
            </article>
          </section>

          <section className="introParagraph secWrap designsystemContainer">
            <h2>
              Design System
              <figure className="graphic" title="Small red, rectangle graphic." />
            </h2>

            <p>
              In an effort to establish and maintain a cohesive image of Shelby
              {' '}
              County Schools (SCS), we have developed this branding and style
              {' '}
              guide for use by our employees.
            </p>

            <p>
              Our brand is our reputation, and the way we represent ourselves
              {' '}
              impacts what others perceive about our District. These resources
              {' '}
              and standards are essential to our identity. They establish a
              {' '}
              framework for clarity and consistency that should be followed by
              {' '}
              all internal departments and applied to all official materials
              {' '}
              and publications.
            </p>

            <p>
              By incorporating these guidelines into all of our work, we can
              {' '}
              help strengthen our identity and reputation together. If you have
              {' '}
              questions, please contact the Communications Department at
              {' '}
              <a href="tel:+19014165628" className="slideUnderBodyLink">(901) 416-5628</a>
              .
            </p>
          </section>

          <section className="branding designsystemContainer sectionWrap lightgrayBCK">
            <h2>
              Branding
              <figure className="graphic" title="Small red, rectangle graphic." />
            </h2>

            <article className="large-12 medium-12 small-12 panelWrap">
              <section className="large-4 medium-12 small-12 columns">
                <article className="articlePanel">
                  <section>
                    <h3>
                      <figure><FontDownloadIcon /></figure>
                      Typography
                    </h3>
                  </section>
                  <p>
                    Our communications are most effective when there is
                    {' '}
                    consistency in content, as well as appearance.
                  </p>
                </article>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <article className="articlePanel">
                  <section>
                    <h3>
                      <figure><PaletteIcon /></figure>
                      Color
                    </h3>
                  </section>
                  <p>
                    Our colors are critical components to our visual identity.
                  </p>
                </article>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <article className="articlePanel">
                  <section>
                    <h3>
                      <figure><CastForEducationIcon /></figure>
                      Logo
                    </h3>
                  </section>
                  <p>
                    Our logo is central to our brand and visual identity.
                  </p>
                </article>
              </section>
            </article>

            <article className="large-12 medium-12 small-12 panelWrap">
              <section className="large-6 medium-12 small-12 columns">
                <article className="articlePanel">
                  <section>
                    <h3>
                      <figure><AccessibilityIcon /></figure>
                      Accessibility
                    </h3>
                  </section>
                  <p>
                    Shelby County Schools recognizes the importance of ensuring
                    {' '}
                    that its website is accessible to persons with disabilities.
                  </p>
                </article>
              </section>

              <section className="large-6 medium-12 small-12 columns">
                <article className="articlePanel">
                  <section>
                    <h3>
                      <figure><MailOutlineIcon /></figure>
                      Email
                    </h3>
                  </section>
                  <p>
                    Email is a form of official District communication and,
                    {' '}
                    therefore, should uphold all standards of our brand.
                  </p>
                </article>
              </section>
            </article>
          </section>

          <section className="language designsystemContainer sectionWrap">
            <h2>
              Language
              <figure className="graphic" title="Small red, rectangle graphic." />
            </h2>

            <article className="large-12 medium-12 small-12 panelWrap">
              <section className="large-6 medium-12 small-12 columns">
                <article className="articlePanel">
                  <section>
                    <h3>
                      <figure><LanguageIcon /></figure>
                      Terms
                    </h3>
                  </section>
                  <p>
                    Shelby County Schools commonly used terms.
                  </p>
                </article>
              </section>

              <section className="large-6 medium-12 small-12 columns">
                <article className="articlePanel">
                  <section>
                    <h3>
                      <figure><TextFormatIcon /></figure>
                      Acronyms
                    </h3>
                  </section>
                  <p>
                    All acronyms, even commonly used education acronyms,
                    {' '}
                    should be fully spelled out on first reference.
                  </p>
                </article>
              </section>
            </article>
          </section>

          <section className="layout designsystemContainer sectionWrap lightgrayBCK">
            <h2>
              Layout
              <figure className="graphic" title="Small red, rectangle graphic." />
            </h2>

            <article className="large-12 medium-12 small-12 panelWrap">
              <section className="large-6 medium-12 small-12 columns">
                <article className="articlePanel">
                  <section>
                    <h3>
                      <figure><PhotoIcon /></figure>
                      Photography
                    </h3>
                  </section>
                  <p>
                    High quality images are important visual elements that
                    {' '}
                    can help make print and digital communications stand out.
                  </p>
                </article>
              </section>

              <section className="large-6 medium-12 small-12 columns">
                <article className="articlePanel">
                  <section>
                    <h3>
                      <figure><ComputerIcon /></figure>
                      Web/Social Media
                    </h3>
                  </section>
                  <p>
                    The District operates multiple social media accounts
                    {' '}
                    to support communication efforts.
                  </p>
                </article>
              </section>
            </article>

            <article className="large-12 medium-12 small-12 panelWrap">
              <section className="large-6 medium-12 small-12 columns">
                <article className="articlePanel">
                  <section>
                    <h3>
                      <figure><LineStyleIcon /></figure>
                      Templates
                    </h3>
                  </section>
                  <p>
                    We have developed two PowerPoint presentation templates
                    {' '}
                    that uphold our brand identity, including approved
                    {' '}
                    colors, logo use, fonts and images.
                  </p>
                </article>
              </section>

              <section className="large-6 medium-12 small-12 columns">
                <article className="articlePanel">
                  <section>
                    <h3>
                      <figure><DescriptionIcon /></figure>
                      Title VI
                    </h3>
                  </section>
                  <p>
                    Our Title VI statement must appear on all publications
                    {' '}
                    and forms produced for external distribution, as
                    {' '}
                    well as all school and District websites.
                  </p>
                </article>
              </section>
            </article>
          </section>
        </main>
      </>
    );
  }
}

export default Home;
