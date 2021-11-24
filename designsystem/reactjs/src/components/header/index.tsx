/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Redirect, NavLink as RRNavLink, Link as a } from 'react-router-dom';

class Header extends React.Component {
  constructor(props: string) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

  }

  handleClick = (event: any) => {
    event.preventDefault();
  };

  render() {
    const getHome = localStorage.getItem('home');
    const getColor = localStorage.getItem('color');
    const getTypography = localStorage.getItem('typography');
    const getLogo = localStorage.getItem('logo');
    const getAccessibility = localStorage.getItem('accessibility');
    const getEmail = localStorage.getItem('email');
    const getTerms = localStorage.getItem('terms');
    const getAcronyms = localStorage.getItem('acronyms');
    const getPhotography = localStorage.getItem('photography');
    const getWebsocial = localStorage.getItem('websocial');
    const getTemplates = localStorage.getItem('templates');
    const getTitleVI = localStorage.getItem('titleVI');

    // if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    //   localStorage.clear();
    //   window.location.href = '/';
    // }

    return (
      <>
        {getHome && (
          <Redirect to="/" />
        )}

        {getTypography && (
          <Redirect to="/typography" />
        )}

        {getColor && (
          <Redirect to="/color" />
        )}

        {getLogo && (
          <Redirect to="/logo" />
        )}

        {getAccessibility && (
          <Redirect to="/accessibility" />
        )}

        {getEmail && (
          <Redirect to="/email" />
        )}

        {getTerms && (
          <Redirect to="/terms" />
        )}

        {getAcronyms && (
          <Redirect to="/acronyms" />
        )}

        {getPhotography && (
          <Redirect to="/photography" />
        )}

        {getWebsocial && (
          <Redirect to="/websocial" />
        )}

        {getTemplates && (
          <Redirect to="/templates" />
        )}

        {getTitleVI && (
          <Redirect to="/titleVI" />
        )}

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
                        <a role="menuitem" href="http://www.scsk12.org/designsystem/#googtrans(en|en)" className="lang-en lang-select" data-lang="en">
                          English
                          <span className="sr-only">English Translate</span>
                        </a>
                      </li>

                      <li>
                        <a role="menuitem" href="http://www.scsk12.org/designsystem/#googtrans(en|es)" className="lang-es lang-select" data-lang="es">
                          Spanish
                          <span className="sr-only">Spanish Translate</span>
                        </a>
                      </li>

                      <li>
                        <a role="menuitem" href="http://www.scsk12.org/designsystem/#googtrans(en|fr)" className="lang-fr lang-select" data-lang="fr">
                          French
                          <span className="sr-only">French Translate</span>
                        </a>
                      </li>

                      <li>
                        <a role="menuitem" href="http://www.scsk12.org/designsystem/#googtrans(en|vi)" className="lang-vi lang-select" data-lang="vi">
                          Vietnamese
                          <span className="sr-only">Vietnamese Translate</span>
                        </a>
                      </li>

                      <li>
                        <a role="menuitem" href="http://www.scsk12.org/designsystem/#googtrans(en|ar)" className="lang-ar lang-select" data-lang="ar">
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
                  {getHome ? (
                    <li
                      className="currentLink slideUnder home"
                    >
                      <RRNavLink
                        to="/"
                        title="SCS Design System"
                      >
                        Home
                      </RRNavLink>
                    </li>
                  ) : (
                    <li
                      className="slideUnder home"
                    >
                      <RRNavLink to="/" title="SCS Design System">Home</RRNavLink>
                    </li>
                  )}

                  {getColor || getTypography || getLogo || getAccessibility || getEmail ? (
                    <li
                      className="currentLink slideUnder brandingLink"
                    >
                      <RRNavLink
                        to="/typography"
                        onClick={this.handleClick}
                        title="Branding"
                      >
                        Branding
                      </RRNavLink>

                      <ul className="brandingLinkDrop">
                        {getTypography ? (
                          <li className="currentLink slideUnderDrop">
                            <RRNavLink
                              to="/typography"
                              title="Typography"
                            >
                              Typography
                            </RRNavLink>
                          </li>
                        ) : (
                          <li className="slideUnderDrop">
                            <RRNavLink
                              to="/typography"
                              title="Typography"
                            >
                              Typography
                            </RRNavLink>
                          </li>
                        )}

                        {getColor ? (
                          <li className="currentLink slideUnderDrop">
                            <RRNavLink
                              to="/color"
                              title="Color"
                            >
                              Color
                            </RRNavLink>
                          </li>
                        ) : (
                          <li className="slideUnderDrop">
                            <RRNavLink
                              to="/color"
                              title="Color"
                            >
                              Color
                            </RRNavLink>
                          </li>
                        )}

                        {getLogo ? (
                          <li className="currentLink slideUnderDrop">
                            <RRNavLink
                              to="/logo"
                              title="Logo"
                            >
                              Logo
                            </RRNavLink>
                          </li>
                        ) : (
                          <li className="slideUnderDrop">
                            <RRNavLink
                              to="/logo"
                              title="Logo"
                            >
                              Logo
                            </RRNavLink>
                          </li>
                        )}

                        {getAccessibility ? (
                          <li className="currentLink slideUnderDrop">
                            <RRNavLink
                              to="/accessibility"
                              title="Accessibility"
                            >
                              Accessibility
                            </RRNavLink>
                          </li>
                        ) : (
                          <li className="slideUnderDrop">
                            <RRNavLink
                              to="/accessibility"
                              title="Accessibility"
                            >
                              Accessibility
                            </RRNavLink>
                          </li>
                        )}

                        {getEmail ? (
                          <li className="currentLink slideUnderDrop">
                            <RRNavLink
                              to="/email"
                              title="Email"
                            >
                              Email
                            </RRNavLink>
                          </li>
                        ) : (
                          <li className="slideUnderDrop">
                            <RRNavLink
                              to="/email"
                              title="Email"
                            >
                              Email
                            </RRNavLink>
                          </li>
                        )}
                      </ul>
                    </li>
                  ) : (
                    <li
                      className="slideUnder brandingLink"
                    >
                      <RRNavLink
                        to="/typography"
                        onClick={this.handleClick}
                        title="Branding"
                      >
                        Branding
                      </RRNavLink>

                      <ul className="brandingLinkDrop">
                        <li className="slideUnderDrop">
                          <RRNavLink
                            to="/typography"
                            title="Typography"
                          >
                            Typography
                          </RRNavLink>
                        </li>

                        <li className="slideUnderDrop">
                          <RRNavLink
                            to="/color"
                            title="Color"
                          >
                            Color
                          </RRNavLink>
                        </li>

                        <li className="slideUnderDrop">
                          <RRNavLink
                            to="/logo"
                            title="Logo"
                          >
                            Logo
                          </RRNavLink>
                        </li>

                        <li className="slideUnderDrop">
                          <RRNavLink
                            to="/accessibility"
                            title="Accessibility"
                          >
                            Accessibility
                          </RRNavLink>
                        </li>

                        <li className="slideUnderDrop">
                          <RRNavLink
                            to="/email"
                            title="Email"
                          >
                            Email
                          </RRNavLink>
                        </li>
                      </ul>
                    </li>
                  )}

                  {getTerms || getAcronyms ? (
                    <li
                      className="currentLink slideUnder languageLink"
                    >
                      <RRNavLink
                        to="#terms"
                        onClick={this.handleClick}
                        title="Language"
                      >
                        Language
                      </RRNavLink>
                      {
                        // This works because it's searching for the id called
                        // terms on the current page but not finding it
                        // <RRNavLink to="#terms">Language</RRNavLink>
                      }

                      <ul className="languageLinkDrop">
                        {getTerms ? (
                          <li className="currentLink slideUnderDrop">
                            <RRNavLink
                              to="/terms"
                              title="Terms"
                            >
                              Terms
                            </RRNavLink>
                          </li>
                        ) : (
                          <li className="slideUnderDrop">
                            <RRNavLink
                              to="/terms"
                              title="Terms"
                            >
                              Terms
                            </RRNavLink>
                          </li>
                        )}

                        {getAcronyms ? (
                          <li className="currentLink slideUnderDrop">
                            <RRNavLink
                              to="/acronyms"
                              title="Acronyms"
                            >
                              Acronyms
                            </RRNavLink>
                          </li>
                        ) : (
                          <li className="slideUnderDrop">
                            <RRNavLink
                              to="/acronyms"
                              title="Acronyms"
                            >
                              Acronyms
                            </RRNavLink>
                          </li>
                        )}
                      </ul>
                    </li>
                  ) : (
                    <li
                      className="slideUnder languageLink"
                    >
                      <RRNavLink
                        to="#terms"
                        onClick={this.handleClick}
                        title="Language"
                      >
                        Language
                      </RRNavLink>

                      <ul className="languageLinkDrop">
                        <li className="slideUnderDrop">
                          <RRNavLink
                            to="/terms"
                            title="Terms"
                          >
                            Terms
                          </RRNavLink>
                        </li>

                        <li className="slideUnderDrop">
                          <RRNavLink
                            to="/acronyms"
                            title="Acronyms"
                          >
                            Acronyms
                          </RRNavLink>
                        </li>
                      </ul>
                    </li>
                  )}

                  {getPhotography || getWebsocial || getTemplates || getTitleVI ? (
                    <li
                      className="currentLink slideUnder layoutLink"
                    >
                      <RRNavLink
                        to="/layout"
                        onClick={this.handleClick}
                        title="Layout"
                      >
                        Layout
                      </RRNavLink>

                      <ul className="layoutLinkDrop">
                        {getPhotography ? (
                          <li className="currentLink slideUnderDrop">
                            <RRNavLink
                              to="/photography"
                              title="Photography"
                            >
                              Photography
                            </RRNavLink>
                          </li>
                        ) : (
                          <li className="slideUnderDrop">
                            <RRNavLink
                              to="/photography"
                              title="Photography"
                            >
                              Photography
                            </RRNavLink>
                          </li>
                        )}

                        {getWebsocial ? (
                          <li className="currentLink slideUnderDrop" title="web and social media">
                            <RRNavLink
                              to="/websocial"
                              title="Web and Social Media"
                            >
                              Web/Social
                            </RRNavLink>
                          </li>
                        ) : (
                          <li className="slideUnderDrop" title="web and social media">
                            <RRNavLink
                              to="/websocial"
                              title="Web and Social Media"
                            >
                              Web/Social
                            </RRNavLink>
                          </li>
                        )}

                        {getTemplates ? (
                          <li className="currentLink slideUnderDrop">
                            <RRNavLink
                              to="/templates"
                              title="Templates"
                            >
                              Templates
                            </RRNavLink>
                          </li>
                        ) : (
                          <li className="slideUnderDrop">
                            <RRNavLink
                              to="/templates"
                              title="Templates"
                            >
                              Templates
                            </RRNavLink>
                          </li>
                        )}

                        {getTitleVI ? (
                          <li className="currentLink slideUnderDrop">
                            <RRNavLink
                              to="/titleVI"
                              title="Title VI"
                            >
                              Title VI
                            </RRNavLink>
                          </li>
                        ) : (
                          <li className="slideUnderDrop">
                            <RRNavLink
                              to="/titleVI"
                              title="Title VI"
                            >
                              Title VI
                            </RRNavLink>
                          </li>
                        )}
                      </ul>
                    </li>
                  ) : (
                    <li
                      className="slideUnder layoutLink"
                      title="Layout"
                    >
                      <RRNavLink
                        to="/layout"
                        onClick={this.handleClick}
                      >
                        Layout
                      </RRNavLink>

                      <ul className="layoutLinkDrop">
                        <li className="slideUnderDrop">
                          <RRNavLink
                            to="/photography"
                            title="Photography"
                          >
                            Photography
                          </RRNavLink>
                        </li>

                        <li className="slideUnderDrop">
                          <RRNavLink
                            to="/websocial"
                            title="Web and Social Media"
                          >
                            Web/Social
                          </RRNavLink>
                        </li>

                        <li className="slideUnderDrop">
                          <RRNavLink
                            to="/templates"
                            title="Templates"
                          >
                            Templates
                          </RRNavLink>
                        </li>

                        <li className="slideUnderDrop">
                          <RRNavLink
                            to="/titleVI"
                            title="Title VI"
                          >
                            Title VI
                          </RRNavLink>
                        </li>
                      </ul>
                    </li>
                  )}
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
