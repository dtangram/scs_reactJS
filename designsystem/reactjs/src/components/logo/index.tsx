/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Link as a } from 'react-router-dom';
import GetAppIcon from '@material-ui/icons/GetApp';
import ScrollBTN from '../scrollBTN';

class Logo extends React.Component {
  constructor(props: string) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
    });

    localStorage.clear();

    const logo: string = 'logo';
    localStorage.setItem('logo', logo);

    const getLinks = document.querySelector('.parentLinks') as HTMLElement;
    const homeLink = getLinks.querySelector('li:nth-child(1)') as HTMLElement;

    homeLink.classList.remove('currentLink');
  }

  render() {
    return (
      <>
        <ScrollBTN />

        <main className="logoMain">
          <section>
            <article className="large-12 bckWrap">
              <h1 className="large-12 medium-12 small-12">
                Logos
                <figure className="graphic" title="Small red, rectangle graphic." />
              </h1>
            </article>
          </section>

          <section className="logoSecOne secWrap">
            <h2>
              Logo Use
              <figure className="graphic" title="Small red, rectangle graphic." />
            </h2>

            <p>
              Our logo is central to our brand and visual identity. It is our
              {' '}
              primary identifier and must be present on all official internal
              {' '}
              and external communications, collateral materials and promotional
              {' '}
              items from the District.
            </p>

            <p>
              The use of District logos for any mass communications – especially
              {' '}
              external – and new logo creation for official programs and initiatives
              {' '}
              must be approved by the Communications Department. This includes
              {' '}
              use by internal departments, as well as external organizations.
            </p>

            <hr />

            <h3>
              Department Logos
            </h3>

            <p>
              The SCS logo represents every department, and every department
              {' '}
              is a reflection of our singular brand. Department logos and
              {' '}
              other personalized internal logos are not approved for use
              {' '}
              in District communications/promotions or under any other
              {' '}
              circumstances.
            </p>

            <p>
              When necessary to visually display a department’s name as part
              {' '}
              of an approved District communication, the title of the
              {' '}
              department should be displayed in standard font with an
              {' '}
              appropriate version of the SCS logo.
            </p>
          </section>

          <section className="logoUse logoContainer secWrap">
            <h2>
              District Logos
              <figure className="graphic" title="Small red, rectangle graphic." />
            </h2>

            <p>
              Our logo is central to our brand and visual identity. It is our
              {' '}
              primary identifier and must be present on all official internal
              {' '}
              and external communications, collateral materials and promotional
              {' '}
              items from the District.
            </p>

            <p>
              The use of District logos for any mass communications – especially
              {' '}
              external – and new logo creation for official programs and initiatives
              {' '}
              must be approved by the Communications Department. This includes
              {' '}
              use by internal departments, as well as external organizations.
              {' '}
              These logos serve as the primary identifiers for the District and
              {' '}
              may be used for all official communications and approved
              {' '}
              promotional purposes.
            </p>

            <p>
              Some unique District programs and initiatives may have approved
              {' '}
              logos. If an approved logo does not feature the SCS seal,
              {' '}
              it should be accompanied by the appropriate District logo of the
              {' '}
              same size.
            </p>

            <hr />

            <section className="large-12 medium-12 small-12">
              <figure className="large-4 medium-4 small-12 columns">
                <img src="http://www.scsk12.org/designsystem/img/SCS-Logo-White-Transparent.png" alt="SCS logo white" />
              </figure>

              <figure className="large-4 medium-4 small-12 columns">
                <img src="http://www.scsk12.org/designsystem/img/SCS-Logo-Color-Transparent.png" alt="SCS logo" />
              </figure>

              <figure className="large-4 medium-4 small-12 columns">
                <img src="http://www.scsk12.org/designsystem/img/SCS-Logo-BW-Transparent.png" alt="SCS logo black" />
              </figure>
            </section>

            <button type="submit" name="scsLogos" title="Download SCS Logos" className="downloadBTN">
              <a href="http://www.scsk12.org/communications\files\2021\scs-logos-2021.zip">
                <figure>
                  <GetAppIcon />
                </figure>

                Download
              </a>
            </button>
          </section>

          <section className="reimagineUse logoContainer secWrap">
            <h2>
              Reimagining Logos
              <figure className="graphic" title="Small red, rectangle graphic." />
            </h2>

            <p>
              Reimaging 901 is the District&apos;s vision and plan for
              {' '}
              truly transforming the educational experience for
              {' '}
              students by reimagining education, schools and
              {' '}
              communities in the 901. These logos may be used for
              {' '}
              approved District communications and public marketing
              {' '}
              and awareness efforts, including student and teacher
              {' '}
              recruitment, community events and campaign-related activities.
            </p>

            <hr />

            <section className="large-12 medium-12 small-12">
              <figure className="large-4 medium-4 small-12 columns">
                <img src="http://www.scsk12.org/designsystem/img/RE901  WHITE.png" alt="SCS Reimagining Logo white" />
              </figure>

              <figure className="large-4 medium-4 small-12 columns">
                <img src="http://www.scsk12.org/designsystem/img/RE901 Color (1).png" alt="SCS Reimagining Logo" />
              </figure>

              <figure className="large-4 medium-4 small-12 columns">
                <img src="http://www.scsk12.org/designsystem/img/RE901 BLACK.png" alt="SCS Reimagining Logo black" />
              </figure>
            </section>

            <button type="submit" name="scsReimagineLogos" title="Download SCS Reimagining Logos" className="downloadBTN">
              <a href="http://www.scsk12.org/communications/files/2021/scs-logos-2021.zip">
                <figure>
                  <GetAppIcon />
                </figure>

                Download
              </a>
            </button>
          </section>

          <section className="logo901Use logoContainer secWrap">
            <h2>
              901 Logos
              <figure className="graphic" title="Small red, rectangle graphic." />
            </h2>

            <p>
              <span>
                <a href="http://www.scsk12.org/901/" target="_blank" className="slideUnderBodyLink">
                  SCS is 901
                </a>
              </span>

              {' '}
              is the District&apos;s identity campaign. It represents our
              {' '}
              essential connection to the city of Memphis. The authentic
              {' '}
              character and soul that defines the 901 is reflected in every
              {' '}
              one of our schools, and the success of SCS is tied to the
              {' '}
              economic vitality of Greater Memphis. The 901 logos are used for
              {' '}
              a wide variety of approved District communications and public
              {' '}
              marketing and awareness efforts, including student and teacher
              {' '}
              recruitment, community events and campaign-related activities.
              {' '}
              The 901 logos are very rarely used for standard
              {' '}
              business/operations-related communications and should never be
              {' '}
              used for official reporting purposes.
            </p>

            <p>
              The only approved variations of the SCS IS 901 logo are listed
              {' '}
              below. To request these logos, please contact Graphic Services
              {' '}
              at
              {' '}
              <a href="tel:+19014165678" className="slideUnderBodyLink">(901) 416-5678</a>
              .
            </p>

            <p>
              <span>
                WE ARE 901 / SOMOS 901
              </span>
              (Student-, Employee-, School- and/or Community-Wide Communications)
              <br />

              <span>
                WE TEACH 901
              </span>
              (Teacher-Related Communications)
              <br />

              <span>
                901 STARTS HERE
              </span>
              (Employee- or School-Related Communications)
              <br />

              <span>
                ALL IN 901
              </span>
              (The District’s Student Attendance Initiative)
              <br />

              <span>
                901 FAMILY
              </span>
              (Parent/Community Engagement Communications)
              <br />

              <span>
                GAME ON 901
              </span>
              (Athletic Initiatives)
            </p>

            <hr />

            <section className="large-12 medium-12 small-12">
              <section className="large-12 medium-12 small-12">
                <figure className="large-6 medium-6 small-12 columns">
                  <img src="http://www.scsk12.org/designsystem/img/901-color.png" alt="SCS Reimagining Logo white" />
                </figure>

                <figure className="large-6 medium-6 small-12 columns">
                  <img src="http://www.scsk12.org/designsystem/img/901-bw.png" alt="SCS Reimagining Logo" />
                </figure>
              </section>

              <section className="large-12 medium-12 small-12">
                <figure className="large-6 medium-6 small-12 columns">
                  <img src="http://www.scsk12.org/designsystem/img/WE are 901.png" alt="SCS Reimagining Logo black" />
                </figure>

                <figure className="large-6 medium-6 small-12 columns">
                  <img src="http://www.scsk12.org/designsystem/img/SOMOS 901 Spanish.png" alt="SCS Reimagining Logo black" />
                </figure>
              </section>
            </section>

            <button type="submit" name="scsReimagineLogos" title="Download SCS 901 Logos" className="downloadBTN">
              <a href="http://www.scsk12.org/communications/img/2019/logos/901 logos.zip">
                <figure>
                  <GetAppIcon />
                </figure>

                Download
              </a>
            </button>
          </section>

          <section className="bestLogoUse logoContainer secWrap">
            <h2>
              Best Practices
              <figure className="graphic" title="Small red, rectangle graphic." />
            </h2>

            <ul>
              <li>
                Use one logo per document. Avoid multiple logos in the same
                {' '}
                document unless an approved program or initiative logo does not
                {' '}
                feature the SCS seal.
              </li>

              <li>
                Use high-resolution logos that can be downloaded from this page.
                {' '}
                Avoid logos found from image searches around the web, as colors,
                {' '}
                proportions or resolution may not meet SCS branding and style
                {' '}
                standards.
              </li>

              <li>
                Don&apos;t alter or stretch the logo outside of its standard proportions.
              </li>

              <li>
                Don&apos;t change the logo color or add patterned backgrounds.
              </li>

              <li>
                Don&apos;t cover the logo with colors, pictures, text or filters.
              </li>

              <li>
                Don&apos;t create your own logo. If you need artwork for your
                {' '}
                District communications, contact the communications team for assistance.
              </li>

              <li>
                Don&apos;t create your own logo. If you need artwork for your District
                {' '}
                communications, contact the communications team for assistance.
              </li>

              <li>
                Don&apos;t use the logo for any purpose that may compromise the
                {' '}
                integrity or credibility of SCS.
              </li>

              <li>
                Don&apos;t use the logo for personal gain.
              </li>

              <li>
                Don&apos;t use the logo in any format that implies
                {' '}
                commercial/political endorsement of a product, service, project
                {' '}
                or individual without approval from communications.
              </li>
            </ul>
          </section>
        </main>
      </>
    );
  }
}

export default Logo;
