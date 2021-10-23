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
                          <li>
                            <RRNavLink
                              to="/typography"
                              className="currentLink slideUnderDrop"
                              activeStyle={{ color: '#F7DA47' }}
                              title="Typography"
                            >
                              Typography
                            </RRNavLink>
                          </li>
                        ) : (
                          <li>
                            <RRNavLink
                              to="/typography"
                              className="slideUnderDrop"
                              title="Typography"
                            >
                              Typography
                            </RRNavLink>
                          </li>
                        )}

                        {getColor ? (
                          <li>
                            <RRNavLink
                              to="/color"
                              className="currentLink slideUnderDrop"
                              activeStyle={{ color: '#F7DA47' }}
                              title="Color"
                            >
                              Color
                            </RRNavLink>
                          </li>
                        ) : (
                          <li>
                            <RRNavLink
                              to="/color"
                              className="slideUnderDrop"
                              title="Color"
                            >
                              Color
                            </RRNavLink>
                          </li>
                        )}

                        {getLogo ? (
                          <li>
                            <RRNavLink
                              to="/logo"
                              className="currentLink slideUnderDrop"
                              activeStyle={{ color: '#F7DA47' }}
                              title="Logo"
                            >
                              Logo
                            </RRNavLink>
                          </li>
                        ) : (
                          <li>
                            <RRNavLink
                              to="/logo"
                              className="slideUnderDrop"
                              title="Logo"
                            >
                              Logo
                            </RRNavLink>
                          </li>
                        )}

                        {getAccessibility ? (
                          <li>
                            <RRNavLink
                              to="/accessibility"
                              className="currentLink slideUnderDrop"
                              activeStyle={{ color: '#F7DA47' }}
                              title="Accessibility"
                            >
                              Accessibility
                            </RRNavLink>
                          </li>
                        ) : (
                          <li>
                            <RRNavLink
                              to="/accessibility"
                              className="slideUnderDrop"
                              title="Accessibility"
                            >
                              Accessibility
                            </RRNavLink>
                          </li>
                        )}

                        {getEmail ? (
                          <li>
                            <RRNavLink
                              to="/email"
                              className="currentLink slideUnderDrop"
                              activeStyle={{ color: '#F7DA47' }}
                              title="Email"
                            >
                              Email
                            </RRNavLink>
                          </li>
                        ) : (
                          <li>
                            <RRNavLink
                              to="/email"
                              className="slideUnderDrop"
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
                        <li>
                          <RRNavLink
                            to="/typography"
                            className="slideUnderDrop"
                            title="Typography"
                          >
                            Typography
                          </RRNavLink>
                        </li>

                        <li>
                          <RRNavLink
                            to="/color"
                            className="slideUnderDrop"
                            title="Color"
                          >
                            Color
                          </RRNavLink>
                        </li>

                        <li>
                          <RRNavLink
                            to="/logo"
                            className="slideUnderDrop"
                            title="Logo"
                          >
                            Logo
                          </RRNavLink>
                        </li>

                        <li>
                          <RRNavLink
                            to="/accessibility"
                            className="slideUnderDrop"
                            title="Accessibility"
                          >
                            Accessibility
                          </RRNavLink>
                        </li>

                        <li>
                          <RRNavLink
                            to="/email"
                            className="slideUnderDrop"
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
                          <li>
                            <RRNavLink
                              to="/terms"
                              className="currentLink slideUnderDrop"
                              activeStyle={{ color: '#F7DA47' }}
                              title="Terms"
                            >
                              Terms
                            </RRNavLink>
                          </li>
                        ) : (
                          <li>
                            <RRNavLink
                              to="/terms"
                              className="slideUnderDrop"
                              title="Terms"
                            >
                              Terms
                            </RRNavLink>
                          </li>
                        )}

                        {getAcronyms ? (
                          <li>
                            <RRNavLink
                              to="/acronyms"
                              className="currentLink slideUnderDrop"
                              activeStyle={{ color: '#F7DA47' }}
                              title="Acronyms"
                            >
                              Acronyms
                            </RRNavLink>
                          </li>
                        ) : (
                          <li>
                            <RRNavLink
                              to="/acronyms"
                              className="slideUnderDrop"
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
                        <li>
                          <RRNavLink
                            to="/terms"
                            className="slideUnderDrop"
                            title="Terms"
                          >
                            Terms
                          </RRNavLink>
                        </li>

                        <li>
                          <RRNavLink
                            to="/acronyms"
                            className="slideUnderDrop"
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
                          <li>
                            <RRNavLink
                              to="/photography"
                              className="currentLink slideUnderDrop"
                              activeStyle={{ color: '#F7DA47' }}
                              title="Photography"
                            >
                              Photography
                            </RRNavLink>
                          </li>
                        ) : (
                          <li>
                            <RRNavLink
                              to="/photography"
                              className="slideUnderDrop"
                              title="Photography"
                            >
                              Photography
                            </RRNavLink>
                          </li>
                        )}

                        {getWebsocial ? (
                          <li title="web and social media">
                            <RRNavLink
                              to="/websocial"
                              className="currentLink slideUnderDrop"
                              activeStyle={{ color: '#F7DA47' }}
                            >
                              Web/Social
                            </RRNavLink>
                          </li>
                        ) : (
                          <li title="web and social media">
                            <RRNavLink
                              to="/websocial"
                              className="slideUnderDrop"
                            >
                              Web/Social
                            </RRNavLink>
                          </li>
                        )}

                        {getTemplates ? (
                          <li>
                            <RRNavLink
                              to="/templates"
                              className="currentLink slideUnderDrop"
                              activeStyle={{ color: '#F7DA47' }}
                              title="Templates"
                            >
                              Templates
                            </RRNavLink>
                          </li>
                        ) : (
                          <li>
                            <RRNavLink
                              to="/templates"
                              className="slideUnderDrop"
                              title="Templates"
                            >
                              Templates
                            </RRNavLink>
                          </li>
                        )}

                        {getTitleVI ? (
                          <li>
                            <RRNavLink
                              to="/titleVI"
                              className="currentLink slideUnderDrop"
                              activeStyle={{ color: '#F7DA47' }}
                              title="Title VI"
                            >
                              Title VI
                            </RRNavLink>
                          </li>
                        ) : (
                          <li>
                            <RRNavLink
                              to="/titleVI"
                              className="slideUnderDrop"
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
                        <li>
                          <RRNavLink
                            to="/photography"
                            className="slideUnderDrop"
                            title="Photography"
                          >
                            Photography
                          </RRNavLink>
                        </li>

                        <li>
                          <RRNavLink
                            to="/websocial"
                            className="slideUnderDrop"
                            title="web and social media"
                          >
                            Web/Social
                          </RRNavLink>
                        </li>

                        <li>
                          <RRNavLink
                            to="/templates"
                            className="slideUnderDrop"
                            title="Templates"
                          >
                            Templates
                          </RRNavLink>
                        </li>

                        <li>
                          <RRNavLink
                            to="/titleVI"
                            className="slideUnderDrop"
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
