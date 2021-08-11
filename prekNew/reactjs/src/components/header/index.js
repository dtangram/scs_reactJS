/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import PropTypes from 'prop-types';
import RRPropTypes from 'react-router-prop-types';
// import { HashLink as Link } from 'react-router-hash-link';
// import { Container, Row, Col } from 'reactstrap';
// import { Link as RRNavLink, a } from 'react-router-dom';
import { NavLink as RRNavLink, a } from 'react-router-dom';
// import Link from '../../link';
// import '../../css/main.css';
// import styles from './styles.module.css';
// import logo from '../../img/logo.png';
// import heroBck from '../../img/comicsHeader.jpg';
// import cb1 from '../../img/item1.jpg';
// import cb2 from '../../img/item2.jpg';
// import cb3 from '../../img/item3.jpg';
// import cb4 from '../../img/item4.jpg';
// import container from './container';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const applyScrollTo = (element) => {
    //   window.scroll({
    //     behavior: 'smooth',
    //     left: 0,
    //     top: element.offsetTop,
    //   });
    // };
    //
    // document.querySelector('li[title="SCS Pre-K Screenings"]').addEventListener('click', () => {
    //   applyScrollTo(document.getElementById('screenings'));
    //   // return false;
    // });
  }

  render() {
    return (
      <>
        <header id="hp-header" className="move-header">
          {
            // TRANSLATE
          }
          <section id="ct-topbar" className="ct-topbar">
            <article className="container">
              <ul id="translator" className="list-unstyled list-inline ct-topbar__list">
                <button type="button">
                  <li className="ct-language">
                    Translate our website&nbsp;
                    <i className="fa fa-chevron-down" aria-hidden="true" />
                    <ul role="menu" className="list-unstyled ct-language__dropdown">
                      <li>
                        <a role="menuitem" href="http://www.scsk12.org/prekNew/#googtrans(en|en)" className="lang-en lang-select" data-lang="en">
                          English
                          <span className="sr-only">English Translate</span>
                        </a>
                      </li>

                      <li>
                        <a role="menuitem" href="http://www.scsk12.org/prekNew/#googtrans(en|es)" className="lang-es lang-select" data-lang="es">
                          Spanish
                          <span className="sr-only">Spanish Translate</span>
                        </a>
                      </li>

                      <li>
                        <a role="menuitem" href="http://www.scsk12.org/prekNew/#googtrans(en|fr)" className="lang-fr lang-select" data-lang="fr">
                          French
                          <span className="sr-only">French Translate</span>
                        </a>
                      </li>

                      <li>
                        <a role="menuitem" href="http://www.scsk12.org/prekNew/#googtrans(en|vi)" className="lang-vi lang-select" data-lang="vi">
                          Vietnamese
                          <span className="sr-only">Vietnamese Translate</span>
                        </a>
                      </li>

                      <li>
                        <a role="menuitem" href="http://www.scsk12.org/prekNew/#googtrans(en|ar)" className="lang-ar lang-select" data-lang="ar">
                          Arabic
                          <span className="sr-only">Arabic Translate</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </button>
              </ul>
            </article>
          </section>

          {
            // LOGO H1
          }
          <section className="row logoH1">
            <article className="small-12 hp-scs-logo-text">
              <a href="http://www.scsk12.org/" target="_blank" className="SCS-logo-focus">
                <figure>
                  <img src="http://www.scsk12.org/img/home-page/scs-log-small-90.png" className="SCS-logo-round" alt="Shelby County Schools Logo" />
                </figure>

                <h1 className="SCS-logo">Shelby County Schools</h1>
              </a>
            </article>
          </section>

          {
            // NAV
          }
          <section
            id="top"
            className="main-nav contain-to-grid fix-nav-scroll"
          >
            <nav
              role="navigation"
              data-topbar
              className="top-bar"
            >
              {
                // <ul className="title-area">
                //   <li className="name hp-nav-active" />
                //   <li className="left toggle-topbar menu-icon">
                //     <RRNavLink to="#">
                //       Menu
                //       <span>
                //         <div className="fi-list" />
                //       </span>
                //     </RRNavLink>
                //   </li>
                // </ul>
              }

              <section
                id="hp-nav"
                className="top-bar-section"
              >
                <ul className="parentLinks">
                  <li
                    className="currentLink slideUnder home"
                    title="Shelby County Schools Pre-K Home"
                  >
                    <RRNavLink to="/">Home</RRNavLink>
                  </li>

                  {
                    // <li
                    //   className="slideUnder"
                    //   title="SCS Pre-K Screenings"
                    // >
                    //   <RRNavLink to="#screenings">Apply</RRNavLink>
                    // </li>
                  }

                  <li
                    className="slideUnder headstartLink"
                    title="Shelby County Schools Head Start"
                  >
                    <RRNavLink to="/headstart">Head Start</RRNavLink>

                    <ul className="headstartLinkDrop">
                      <li>
                        <RRNavLink
                          to="/headstart"
                          className="slideUnderDrop"
                          title="Shelby County Schools Head Start"
                        >
                          Head Start
                        </RRNavLink>
                      </li>

                      <li>
                        <RRNavLink
                          to="/readiness"
                          className="slideUnderDrop"
                          title="SCS Pre-K School Readiness"
                        >
                          School Readiness
                        </RRNavLink>
                      </li>

                      <li>
                        <RRNavLink
                          to="/servicesresearch"
                          className="slideUnderDrop"
                          title="SCS Pre-K Services and Research"
                        >
                          Services, Research
                        </RRNavLink>
                      </li>

                      <li>
                        <a
                          href="http://www.scsk12.org/prek/files/2019/Early Childhood Annual Report 2018.pdf"
                          target="_blank"
                          className="slideUnderDrop"
                          title="SCS Pre-K Annual Report"
                        >
                          Annual Report
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li
                    className="slideUnder"
                    title="SCS Pre-K Schools"
                  >
                    <a
                      href="http://www.scsk12.org/schools/?findschool=&level=P&category=?PID=918#/"
                      target="_blank"
                    >
                      Pre-K Schools
                    </a>
                  </li>

                  <li
                    className="slideUnder"
                    title="SCS Pre-K Classroom Environment"
                  >
                    <RRNavLink
                      to="/environment"
                    >
                      Environment
                    </RRNavLink>
                  </li>

                  <li
                    className="slideUnder"
                    title="SCS Pre-K Family Involvement"
                  >
                    <RRNavLink
                      to="/family"
                    >
                      Family
                    </RRNavLink>
                  </li>

                  <li
                    className="slideUnder"
                    title="SCS Pre-K Staff"
                  >
                    <RRNavLink
                      to="/staff"
                    >
                      Staff
                    </RRNavLink>
                  </li>
                </ul>
              </section>
            </nav>
          </section>
        </header>
      </>
    );
  }
}

export default Header;
