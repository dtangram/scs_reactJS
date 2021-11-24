/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import DownArr from './dwnArr';
import prekImage1 from '../img/2019/prekImage1.jpg';
import prekImage2 from '../img/2019/prekImage2.jpg';
import prekImage3 from '../img/2019/prekImage3.jpg';
import prekImage4 from '../img/2019/prekImage4.jpg';
import prekImage5 from '../img/2019/prekImage5.jpg';

class ImgSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // ROTATING BACKGROUND IMAGE
    const play = document.querySelector('#play');
    const pause = document.querySelector('#pause');
    const bckRotate = document.querySelector('#bckRotate');
    const bckRotateLi = bckRotate.querySelectorAll('li');

    if (navigator.appVersion.indexOf('Mac') !== -1) {
      bckRotate.style.margin = '0';
    }

    play.style.display = 'none';
    pause.style.display = 'block';

    let clearSlide;
    let nextImg = 0;

    bckRotateLi[nextImg].style.opacity = 1;

    const rotateImg = () => {
      bckRotateLi[nextImg].style.opacity = 0;
      setTimeout(() => {
        bckRotateLi[nextImg].style.display = 'none';
      }, 500);

      nextImg = (nextImg + 1) % bckRotateLi.length;

      setTimeout(() => {
        bckRotateLi[nextImg].style.display = 'block';
      }, 500);
      bckRotateLi[nextImg].style.cssText = 'opacity: 1; transition: opacity 500ms ease-in-out;';
    };

    const slideFunc = () => {
      clearSlide = setInterval(rotateImg, 5000);
    };

    // IMAGE CAROUSEL CONTROLS
    if (play.style.display === 'none') {
      slideFunc();
    } else if (play.style.display === 'block') {
      clearInterval(clearSlide);
    }

    play.addEventListener('click', () => {
      play.style.display = 'none';
      pause.style.display = 'block';

      slideFunc();
    });

    pause.addEventListener('click', () => {
      clearInterval(clearSlide);

      play.style.display = 'block';
      pause.style.display = 'none';

      if (play.style.display === 'block') {
        clearInterval(clearSlide);
      }
    });

    const bckWrap = document.querySelector('#bckWrap');
    const arrowCTRL = document.querySelector('.arrowCTRL');
    const leftArr = document.querySelector('#leftArr');
    const rightArr = document.querySelector('#rightArr');

    bckWrap.addEventListener('mouseover', () => {
      arrowCTRL.style.cssText = 'opacity: 1; transition: opacity 500ms ease-in-out;';
    });

    bckWrap.addEventListener('mouseout', () => {
      arrowCTRL.style.cssText = 'opacity: .4; transition: opacity 500ms ease-in-out;';
    });

    if (rightArr) {
      rightArr.addEventListener('click', () => {
        clearInterval(clearSlide);

        play.style.display = 'block';
        pause.style.display = 'none';

        if (nextImg > bckRotateLi.length - 1) {
          nextImg += 1;
        }

        rotateImg();
      });

      rightArr.addEventListener('mouseover', () => {
        arrowCTRL.querySelector('.arrows:nth-child(2)').style.cssText = 'background: #333; transition: background 500ms ease-in-out;';
      });

      rightArr.addEventListener('mouseout', () => {
        arrowCTRL.querySelector('.arrows:nth-child(2)').style.cssText = 'background: transparent; transition: background 500ms ease-in-out;';
      });

      leftArr.addEventListener('click', () => {
        clearInterval(clearSlide);

        play.style.display = 'block';
        pause.style.display = 'none';

        bckRotateLi[nextImg].style.opacity = 0;
        setTimeout(() => {
          bckRotateLi[nextImg].style.display = 'none';
        }, 500);

        nextImg -= 1;

        if (nextImg < 0) {
          nextImg = bckRotateLi.length - 1;
        }

        setTimeout(() => {
          bckRotateLi[nextImg].style.display = 'block';
        }, 500);
        bckRotateLi[nextImg].style.opacity = 1;
      });

      leftArr.addEventListener('mouseover', () => {
        arrowCTRL.querySelector('.arrows:nth-child(1)').style.cssText = 'background: #333; transition: background 500ms ease-in-out;';
      });

      leftArr.addEventListener('mouseout', () => {
        arrowCTRL.querySelector('.arrows:nth-child(1)').style.cssText = 'background: transparent; transition: background 500ms ease-in-out;';
      });
    }
    //
  }

  render() {
    return (
      <>
        <article id="bckWrap" className="large-12">
          <section className="playerControls">
            <button id="pause" type="button" className="controlsBTN"><i className="fas fa-pause controls" alt="Pause button" /></button>
            <button id="play" type="button" className="controlsBTN"><i className="fas fa-play controls" alt="Play button" /></button>
          </section>

          <article className="alertLinkWrap">
            <p className="slideUnder alertLink">
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
          </article>

          <h1 className="larg-12 medium-12 small-12">
            Pre-K &
            <br />
            Head Start
            <figure className="graphic" alt="Small red, rectangle graphic." />
          </h1>

          {
            // PLAY AND PAUSE IMAGE CAROUSEL
          }

          <section className="arrowCTRL">
            <button id="leftArr" type="button" className="arrows"><i className="fas fa-chevron-left controlsArr" alt="Left arrow to navigate to previous photo." /></button>
            <button id="rightArr" type="button" className="arrows"><i className="fas fa-chevron-right controlsArr" alt="Right arrow to navigate to next photo." /></button>
          </section>

          <DownArr />

          <section id="bck">
            <ul id="bckRotate">
              <li><img src={prekImage1} alt="Pre-K students holding letters that spell the word, learn" /></li>
              <li><img src={prekImage2} alt="Group of pre-k students with their teachers" /></li>
              <li><img src={prekImage3} alt="Pre-K girls sitting down" /></li>
              <li><img src={prekImage4} alt="Group of pre-k students with their teachers" /></li>
              <li><img src={prekImage5} alt="Pre-K students working on smart tablet" /></li>
            </ul>
          </section>
        </article>
      </>
    );
  }
}

export default ImgSlider;
