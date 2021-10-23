/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import ScrollBTN from '../scrollBTN';

class Accessibility extends React.Component {
  constructor(props: string) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
    });

    localStorage.clear();

    const accessibility: string = 'accessibility';
    localStorage.setItem('accessibility', accessibility);

    const getLinks = document.querySelector('.parentLinks') as HTMLElement;
    const homeLink = getLinks.querySelector('li:nth-child(1)') as HTMLElement;

    homeLink.classList.remove('currentLink');
  }

  render() {
    return (
      <>
        <ScrollBTN />

        <main className="accMain">
          <section>
            <article className="large-12 bckWrap">
              <h1 className="large-12 medium-12 small-12">
                Accessibility
                <figure className="graphic" title="Small red, rectangle graphic." />
              </h1>
            </article>
          </section>

          <section className="introParagraph secWrap">
            <h2>
              Website Accessibility
              <figure className="graphic" title="Small red, rectangle graphic." />
            </h2>

            <p>
              Shelby County Schools recognizes the importance of ensuring that
              {' '}
              its website is accessible to persons with disabilities. SCS is
              {' '}
              committed to making information accessible in compliance with the
              {' '}
              Americans with Disabilities Act and the Rehabilitation Act. SCS
              {' '}
              regularly reviews its website to identify and resolve accessibility
              {' '}
              issues.
            </p>

            <p>
              If, because of a disability, you are unable to access content on
              {' '}
              Shelby County School’s website, have questions about the
              {' '}
              accessibility of content or technology used by the District,
              {' '}
              and/or would like to report barriers to accessing any information
              {' '}
              on this website, please email
              {' '}
              <a href="mailto:martinjl@scsk12.org" className="slideUnderBodyLink">martinjl@scsk12.org</a>
              {' '}
              or call
              {' '}
              <a href="tel:+19014166372" className="slideUnderBodyLink">(901) 416-6372</a>
              .
              {' '}
              We will work to provide to you the information
              {' '}
              through an alternate communication method or one that is accessible
              {' '}
              for you consistent with applicable law.
            </p>

            <p>
              Please note that some pages on SCS websites are links to
              {' '}
              third-party sites. SCS is not responsible for the content,
              {' '}
              facts, opinions or accessibility of these sites.
            </p>
          </section>
        </main>
      </>
    );
  }
}

export default Accessibility;
