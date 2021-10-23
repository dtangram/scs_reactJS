/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';
import ScrollBTN from '../scrollBTN';

class Email extends React.Component {
  constructor(props: string) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
    });

    localStorage.clear();

    const email: string = 'email';
    localStorage.setItem('email', email);

    const getLinks = document.querySelector('.parentLinks') as HTMLElement;
    const homeLink = getLinks.querySelector('li:nth-child(1)') as HTMLElement;

    homeLink.classList.remove('currentLink');
  }

  render() {
    return (
      <>
        <ScrollBTN />

        <main className="emailMain">
          <section>
            <article className="large-12 bckWrap">
              <h1 className="large-12 medium-12 small-12">
                Email
                <figure className="graphic" title="Small red, rectangle graphic." />
              </h1>
            </article>
          </section>

          <section className="introParagraph secWrap">
            <h2>
              District Email
              <figure className="graphic" title="Small red, rectangle graphic." />
            </h2>

            <p>
              Email is a form of official District communication and,
              {' '}
              therefore, should uphold all standards of our brand.
            </p>

            <p>
              Email signatures should not include any elements that compete with
              {' '}
              or compromise our brand, such as colored or patterned backgrounds,
              {' '}
              motivational quotes, scripture or images other than the SCS logo.
              {' '}
              Additionally, the SCS logo should not be altered in any way.
            </p>

            <p>
              Email signatures should contain the approved image, with the
              {' '}
              following standard contact information below:
            </p>

            <hr />

            <article className="logoEmailUse">
              <figure>
                <img src="http://www.scsk12.org/designsystem/img/RE901 Color (1).png" alt="SCS Reimagining Logo" />
              </figure>

              <p>
                <span>Your Name</span>
                <br />
                Title
                <br />
                160 S. Hollywood St. | Memphis, TN | 38112
                <br />
                Department Name, Building/Room#
                <br />
                Main Phone: 901-416-____ | Direct Phone: 901-416-____
                <br />
                Cell Phone: (If applicable)
                <br />
                Email:
              </p>
            </article>

            <hr />

            <article>
              <p>
                Click the button below to download the approved SCS email signature image.
              </p>

              <button type="submit" name="scsReimagineLogos" title="Download SCS email image" className="downloadBTN">
                <a href="http://www.scsk12.org/communications\files\2021\scs-logos-2021.zip">
                  <figure>
                    <GetAppIcon />
                  </figure>

                  Download
                </a>
              </button>
            </article>
          </section>
        </main>
      </>
    );
  }
}

export default Email;
