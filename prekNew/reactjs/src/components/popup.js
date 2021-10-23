/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import popupImage from '../img/2021/PRE-K-BANNER-ENG.jpg';

class Popup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // POPUP
    const popup = document.querySelector('.popup');
    const popupContainer = document.querySelector('.popup > article');
    const popH3Link = document.querySelector('.popupContainer > section p:nth-child(1)');
    const pageLoading = document.querySelector('.popupContainer > p:nth-child(1)');
    const close = document.querySelector('.popupContainer > button');
    const alertLinkWrap = document.querySelector('.alertLinkWrap');
    const bckRotate = document.querySelector('#bckRotate');

    if (navigator.userAgent.indexOf('Firefox') !== -1) {
      document.querySelector('.popupCloseBTN').style.cssText = 'left: 0; transform: translate(0, 0);';
    }

    if (navigator.userAgent.indexOf('Edge') !== -1 || navigator.userAgent.indexOf('IE') !== -1) {
      document.querySelector('#downArr img').style.cssText = 'height: 25px; width: 40px';
    }

    const popClose = document.querySelectorAll('.popup, .popup > button');

    window.addEventListener('load', (event) => {
      pageLoading.style.cssText = 'opacity: 0; transition: opacity 5000ms ease-out;';
      pageLoading.classList.remove('popupCloseBTN');
      pageLoading.classList.add('loading');

      close.style.cssText = 'opacity: 1; transition: opacity 5000ms ease-in-out;';
      close.classList.remove('btnHide');
      close.classList.add('popupCloseBTN');

      for (let i = 0; i < popClose.length; i += 1) {
        const popCloseScrollTo = (element) => {
          window.scroll({
            behavior: 'smooth',
            left: 0,
            top: element.offsetTop,
          });
        };

        popClose[i].addEventListener('click', () => {
          alertLinkWrap.style.cssText = 'display: block; opacity: 1;';
          popCloseScrollTo(('#screenings'));

          popupContainer.style.cssText = 'opacity: 0; margin-top: -200px; transition: opacity 500ms, margin-top 500ms ease-in-out;';
          popup.style.cssText = 'opacity: 0; transition: opacity 500ms ease-in-out;';
          setTimeout(() => {
            popup.style.display = 'none';
          }, 500);
        });
      }

      const bodyHTMLScrollTo = (element) => {
        window.scroll({
          behavior: 'smooth',
          left: 0,
          top: element.offsetTop - 100,
        });
      };

      popup.addEventListener('click', () => {
        bodyHTMLScrollTo(document.querySelector('#screenings'));
      });

      window.addEventListener('scroll', () => {
        if (window.scrollY > 950) {
          popupContainer.style.cssText = 'opacity: 0; margin-top: -200px; transition: opacity 500ms, margin-top 500ms ease-in-out;';
          popup.style.cssText = 'opacity: 0; transition: opacity 500ms ease-in-out;';
          setTimeout(() => {
            popup.style.display = 'none';
          }, 500);

          alertLinkWrap.style.cssText = 'opacity: 1; display: block;';
        }
      });
    });

    if (document.readyState === 'complete') {
      pageLoading.style.cssText = 'opacity: 0; transition: opacity 5000ms ease-out;';
      pageLoading.classList.remove('popupCloseBTN');
      pageLoading.classList.add('loading');

      close.style.cssText = 'opacity: 1; transition: opacity 5000ms ease-in-out;';
      close.classList.remove('btnHide');
      close.classList.add('popupCloseBTN');

      for (let i = 0; i < popClose.length; i += 1) {
        const popCloseScrollTo = (element) => {
          window.scroll({
            behavior: 'smooth',
            left: 0,
            top: element.offsetTop,
          });
        };

        popClose[i].addEventListener('click', () => {
          alertLinkWrap.style.cssText = 'display: block; opacity: 1;';
          popCloseScrollTo(('#screenings'));

          popupContainer.style.cssText = 'opacity: 0; margin-top: -200px; transition: opacity 500ms, margin-top 500ms ease-in-out;';
          popup.style.cssText = 'opacity: 0; transition: opacity 500ms ease-in-out;';
          setTimeout(() => {
            popup.style.display = 'none';
          }, 500);
        });
      }

      const bodyHTMLScrollTo = (element) => {
        window.scroll({
          behavior: 'smooth',
          left: 0,
          top: element.offsetTop - 100,
        });
      };

      popup.addEventListener('click', () => {
        bodyHTMLScrollTo(document.querySelector('#screenings'));
      });

      window.addEventListener('scroll', (event) => {
        if (window.scrollY > 950) {
          popupContainer.style.cssText = 'opacity: 0; margin-top: -200px; transition: opacity 500ms, margin-top 500ms ease-in-out;';
          popup.style.cssText = 'opacity: 0; transition: opacity 500ms ease-in-out;';
          setTimeout(() => {
            popup.style.display = 'none';
          }, 500);

          alertLinkWrap.style.cssText = 'opacity: 1; display: block;';
        }
      });
    }

    if (navigator.appVersion.indexOf('Mac') !== -1) {
      bckRotate.style.margin = '0';
    }

    popH3Link.addEventListener('click', () => {
      window.open('http://www.scsk12.org/newsroom/#/article/1621');
    });
    //
  }

  render() {
    return (
      <>
        {
          // POPUP
        }
        <article className="popupWrap">
          <section className="popup">
            <article className="popupContainer popupAnimation">
              <p className="popupCloseBTN">Page is loading...</p>

              <button type="button" className="btnHide">Apply for Pre-K</button>
              <section className="prekPopupH3">
                <p className="slideUnder">
                  <a
                    href="http://www.scsk12.org/newsroom/#/article/1621"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ATTN. PORTER-LEATH FAMILIES:
                    <br />
                    CLICK HERE TO LEARN OUR PLANS TO ENSURE YOU HAVE ACCESS
                    {' '}
                    TO HIGH-QUALITY PRE-K EDUCATION WITH SCS.
                  </a>
                </p>

                <p>
                  2021-22 PRE-K APPLICATIONS ARE NOW OPEN!
                  <br />
                  <span className="italics">Review eligibility info & apply!</span>
                </p>

                <figure><img src={popupImage} alt="Boy student smiling at camera" /></figure>

                <p>
                  ¡LAS SOLICITUDES DE PRE-K PARA EL AÑO 2021-22 YA ESTÁN ABIERTAS!
                  <br />
                  <span className="italics">Revise la información de elegibilidad y aplique.</span>
                </p>
              </section>
            </article>
          </section>
        </article>
      </>
    );
  }
}

export default Popup;
