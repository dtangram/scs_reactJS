/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import downArr from '../img/2019/downArr.png';

class DownArr extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // DOWN ARROW ANCHOR LINK
    const downArrow = document.querySelector('#downArr');
    const alertLinkWrap = document.querySelector('.alertLinkWrap');

    const downArrScrollTo = (element) => {
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop,
      });
    };

    downArrow.addEventListener('click', () => {
      downArrScrollTo(document.querySelector('#screenings'));
      // return false;
    });

    downArrow.classList.add('animated', 'css3-notification');

    downArrow.addEventListener('mouseover', () => {
      downArrow.classList.remove('animated', 'css3-notification');
    });

    downArrow.addEventListener('mouseout', () => {
      downArrow.classList.add('animated', 'css3-notification');
    });

    const bodyHTMLScrollTo = (element) => {
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop - 100,
      });
    };

    downArrow.addEventListener('click', () => {
      bodyHTMLScrollTo(document.querySelector('#screenings'));
      alertLinkWrap.style.cssText = 'display: block; opacity: 1; transition: display 1000ms, opacity 1000ms ease-in-out;';
    });
  }

  render() {
    return (
      <>
        <figure id="downArr" className="large-12 medium-12 small-12">
          <figcaption>Apply for Pre-K</figcaption>
          <img src={downArr} alt="Red arrow pointing down" />
        </figure>
      </>
    );
  }
}

export default DownArr;
