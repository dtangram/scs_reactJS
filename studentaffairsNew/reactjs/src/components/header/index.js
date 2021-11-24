/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { NavLink as RRNavLink, a } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const nav = document.querySelector('nav.top-bar');
    if (window.screen.width <= 640) {
      nav.addEventListener('click', () => {
        nav.classList.toggle('expanded');
      });
    }
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
                        <a role="menuitem" href="http://www.scsk12.org/studentaffairsNew/#googtrans(en|en)" className="lang-en lang-select" data-lang="en">
                          English
                          <span className="sr-only">English Translate</span>
                        </a>
                      </li>

                      <li>
                        <a role="menuitem" href="http://www.scsk12.org/studentaffairsNew/#googtrans(en|es)" className="lang-es lang-select" data-lang="es">
                          Spanish
                          <span className="sr-only">Spanish Translate</span>
                        </a>
                      </li>

                      <li>
                        <a role="menuitem" href="http://www.scsk12.org/studentaffairsNew/#googtrans(en|fr)" className="lang-fr lang-select" data-lang="fr">
                          French
                          <span className="sr-only">French Translate</span>
                        </a>
                      </li>

                      <li>
                        <a role="menuitem" href="http://www.scsk12.org/studentaffairsNew/#googtrans(en|vi)" className="lang-vi lang-select" data-lang="vi">
                          Vietnamese
                          <span className="sr-only">Vietnamese Translate</span>
                        </a>
                      </li>

                      <li>
                        <a role="menuitem" href="http://www.scsk12.org/studentaffairsNew/#googtrans(en|ar)" className="lang-ar lang-select" data-lang="ar">
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
              <a href="http://www.scsk12.org/" target="_blank" rel="noreferrer" className="SCS-logo-focus">
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
              <ul className="title-area">
                <li className="name hp-nav-active" />
                <li className="left toggle-topbar menu-icon">
                  <RRNavLink to="#">
                    Menu
                    <span>
                      <div className="fi-list" />
                    </span>
                  </RRNavLink>
                </li>
              </ul>

              <section
                id="hp-nav"
                className="top-bar-section"
              >
                <ul className="parentLinks">
                  <li
                    className="currentLink slideUnder home"
                    title="Shelby County Schools Student Affairs Home"
                  >
                    <RRNavLink to="/">Home</RRNavLink>
                  </li>

                  <li
                    className="slideUnder"
                    title="SCS Student Affairs About Us"
                  >
                    <a
                      href="http://www.scsk12.org/studentaffairsNew/files/2020/DOSA%20Pillars.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      About Us
                    </a>
                  </li>

                  <li
                    className="slideUnder"
                    title="SCS Student Affairs Leadership"
                  >
                    <RRNavLink
                      to="/leadership"
                    >
                      Leadership
                    </RRNavLink>
                  </li>

                  <li
                    className="slideUnder"
                    title="SCS Student Affairs Engagement"
                  >
                    <RRNavLink
                      to="/engagement"
                    >
                      Engagement
                    </RRNavLink>
                  </li>

                  <li
                    className="slideUnder"
                    title="SCS Student Affairs Staff"
                  >
                    <RRNavLink
                      to="/staff"
                    >
                      This Is Us
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
