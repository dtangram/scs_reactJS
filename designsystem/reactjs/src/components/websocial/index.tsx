/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Link as a } from 'react-router-dom';
import ScrollBTN from '../scrollBTN';

class WebSocial extends React.Component {
  constructor(props: string) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
    });

    localStorage.clear();

    const websocial: string = 'websocial';
    localStorage.setItem('websocial', websocial);

    const getLinks = document.querySelector('.parentLinks') as HTMLElement;
    const homeLink = getLinks.querySelector('li:nth-child(1)') as HTMLElement;

    homeLink.classList.remove('currentLink');
  }

  render() {
    return (
      <>
        <ScrollBTN />

        <main className="webMain">
          <section>
            <article className="large-12 bckWrap">
              <h1 className="large-12 medium-12 small-12">
                Web & Social
                <figure className="graphic" title="Small red, rectangle graphic." />
              </h1>
            </article>
          </section>

          <section className="introParagraph secWrap designsystemContainer">
            <h2>
              Social Media
              <figure className="graphic" title="Small red, rectangle graphic." />
            </h2>

            <p>
              The District operates multiple social media accounts to support
              {' '}
              communication efforts. Our social accounts uphold all elements of
              {' '}
              our brand identity.
            </p>

            <p>
              Additionally, we support schools with social media by helping to
              {' '}
              create accounts, provide user training and developing content
              {' '}
              strategies, including approved ad purchases.
            </p>

            <p className="italics">
              Departmental social media accounts should be approved by the
              {' '}
              Communications Department to ensure they meet proper brand
              {' '}
              standards and do not duplicate, compete with or distract from the
              {' '}
              official District accounts.
            </p>
          </section>

          <section className="listContainer secWrap designsystemContainer">
            <h2>
              Web
              <figure className="graphic" title="Small red, rectangle graphic." />
            </h2>

            <p>
              The Communications Department works with departments to ensure
              {' '}
              accurate information is available online for parents, students,
              {' '}
              employees and public stakeholders.
            </p>

            <p>
              To ensure consistency, our internal web pages are developed within
              {' '}
              our standard website template. Websites developed for external
              {' '}
              audiences may feature custom design elements related to a specific
              {' '}
              campaign or communication goal/purpose.
            </p>

            <article className="large-12 medium-12 small-12 panelWrapContain">
              <section className="large-6 medium-12 small-12 columns">
                <figure>
                  <img src="http://www.scsk12.org/designsystem/img/img1.jpg" alt="Unapproved blurry, pixelated image" />

                  <figcaption>Standard Template</figcaption>
                </figure>
              </section>

              <section className="large-6 medium-12 small-12 columns">
                <figure>
                  <img src="http://www.scsk12.org/designsystem/img/img2.jpg" alt="Unapproved stretched image" />

                  <figcaption>Custom Campaign Template</figcaption>
                </figure>
              </section>
            </article>
          </section>

          <section className="listContainer secWrap">
            <article className="large-12 medium-12 small-12 listWrap">
              <p className="italics">
                External websites are not permitted for SCS department websites.
                {' '}
                All department websites should be built in the standard SCS
                {' '}
                website template for consistency.
              </p>

              <p>
                The Communications Department does not currently manage school
                {' '}
                websites. These sites are supported by the Information
                {' '}
                Technology Department. For training or technical assistance with
                {' '}
                a District-provided school website, call the IT Help Desk at
                {' '}
                <a href="tel:+19014162700" className="slideUnderBodyLink">(901) 416-2700</a>
                .
              </p>

              <p className="italics">
                If any school purchases a website from an external vendor, it
                {' '}
                must be approved by the Communications Department before going
                {' '}
                live to ensure it meets appropriate District branding and style
                {' '}
                guidelines, as well as tech specifications provided by the IT
                {' '}
                Department.
              </p>
            </article>
          </section>
        </main>
      </>
    );
  }
}

export default WebSocial;
