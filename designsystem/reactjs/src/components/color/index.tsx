/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Link as a, Redirect } from 'react-router-dom';
import ScrollBTN from '../scrollBTN';

class Color extends React.Component {
  constructor(props: string) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
    });

    localStorage.clear();

    const color: string = 'color';
    localStorage.setItem('color', color);

    const getLinks = document.querySelector('.parentLinks') as HTMLElement;
    const homeLink = getLinks.querySelector('li:nth-child(1)') as HTMLElement;

    homeLink.classList.remove('currentLink');

    const colorHover = document.querySelector('.colorUse');
    // console.log('colorHover: ', cs);

    if (colorHover) {
      const cs = colorHover.querySelectorAll('figure');
      // const cs = colorHover.getElementsByTagName('figure');

      for (let i: number = 1; i < cs.length; i += 1) {
        const mouseoverFig = () => {
          cs[i].style.width = '500px';
          cs[i].style.transition = 'width 300ms ease-in-out';
        };

        const mouseoutFig = () => {
          cs[i].style.width = '100%';
          cs[i].style.transition = 'width 300ms ease-in-out';
        };

        cs[i].addEventListener('mouseover', mouseoverFig);
        cs[i].addEventListener('mouseout', mouseoutFig);
      }
    }

    // document.body.addEventListener('keydown', (event) => {
    //   if (event.key === 'F5' || (event.ctrlKey && event.code === 'KeyR')) {
    //     event.preventDefault();
    //     return false;
    //   }
    //
    //   return false;
    // });
  }

  render() {
    return (
      <>
        <ScrollBTN />
        <Redirect to="/color" />

        <main className="colorMain">
          <section>
            <article className="large-12 bckWrap">
              <h1 className="large-12 medium-12 small-12">
                Color
                <figure className="graphic" title="Small red, rectangle graphic." />
              </h1>
            </article>
          </section>

          <section className="colorSecOne secWrap">
            <h2>
              SCS Color
              <figure className="graphic" title="Small red, rectangle graphic." />
            </h2>

            <p>
              Our colors are critical components to our visual identity. Our
              {' '}
              specific use of blue, red, gold, black and white, as found in our
              {' '}
              District logos, should be consistent in all official communications.
              {' '}
              Complimentary color palettes may be incorporated to enhance certain
              {' '}
              messages/displays or reflect campaigns and related themes.
            </p>
          </section>

          <section className="colorUse designsystemContainer lightgrayBCK colorContainer">
            <h2>
              SCS Palette
              <figure className="graphic" title="Small red, rectangle graphic." />
            </h2>

            <article className="large-12 medium-12 small-12 panelColorWrap">
              <h3>
                Primary Palette
              </h3>

              <section className="large-4 medium-12 small-12 columns">
                <article>
                  <section>
                    <article>
                      <figure title="RGB: 80 101 166, Hex: #5065A6" />
                      <figure title="RGB: 123 140 186, Hex: #7B8CBA" />
                      <figure title="RGB: 167 178 210, Hex: #A7B2D2" />
                      <figure title="RGB: 211 217 233, Hex: #D3D9E9" />
                      <figure title="RGB: 232 235 242, Hex: #E8EBF2" />
                    </article>

                    <p>
                      <span>Color:</span>
                      {' '}
                      Blue
                      <br />
                      <span>RGB:</span>
                      {' '}
                      36, 70, 144
                      <br />
                      <span>Hex:</span>
                      {' '}
                      #244690
                    </p>
                  </section>
                </article>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <article>
                  <section>
                    <article>
                      <figure title="RGB: 213 76 83, Hex: #D54C53" />
                      <figure title="RGB: 225 122 125, Hex: #E17A7D" />
                      <figure title="RGB: 235 166 169, Hex: #EBA6A9" />
                      <figure title="RGB: 245 211 212, Hex: #F5D3D4" />
                      <figure title="RGB: 251 232 234, Hex: #FBE8EA" />
                    </article>

                    <p>
                      <span>Color:</span>
                      {' '}
                      Red
                      <br />
                      <span>RGB:</span>
                      {' '}
                      233, 1, 1
                      <br />
                      <span>Hex:</span>
                      {' '}
                      #E90101
                    </p>
                  </section>
                </article>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <article>
                  <section>
                    <p>
                      <span>Color:</span>
                      {' '}
                      White
                      <br />
                      <span>RGB:</span>
                      {' '}
                      255, 255, 255
                      <br />
                      <span>Hex:</span>
                      {' '}
                      #FFFFFF
                    </p>
                  </section>
                </article>
              </section>

              <hr />
            </article>

            <article className="large-12 medium-12 small-12 panelColorWrap">
              <h3>
                Secondary Palette
              </h3>

              <section className="large-6 medium-12 small-12 columns">
                <article>
                  <section>
                    <article>
                      <figure title="RGB: 255 208 68, Hex: #FFD044" />
                      <figure title="RGB: 255 219 115, Hex: #FFDB73" />
                      <figure title="RGB: 255 231 161, Hex: #FFE7A1" />
                      <figure title="RGB: 255 243 209, Hex: #FFF3D1" />
                      <figure title="RGB: 255 249 231, Hex: #FFF9E7" />
                    </article>

                    <p>
                      <span>Color:</span>
                      {' '}
                      Gold
                      <br />
                      <span>RGB:</span>
                      {' '}
                      247, 218, 71
                      <br />
                      <span>Hex:</span>
                      {' '}
                      #F7DA47
                    </p>
                  </section>
                </article>
              </section>

              <section className="large-6 medium-12 small-12 columns">
                <article>
                  <section>
                    <article>
                      <figure title="RGB: 43 43 43, Hex: #2B2B2B" />
                      <figure title="RGB: 64 64 65, Hex: #404041" />
                      <figure title="RGB: 204 204 204, Hex: #CCCCCC" />
                      <figure title="RGB: 208 210 211, Hex: #D0D2D3" />
                      <figure title="RGB: 250 251 252, Hex: #FAFBFC" />
                    </article>

                    <p>
                      <span>Color:</span>
                      {' '}
                      Black
                      <br />
                      <span>RGB:</span>
                      {' '}
                      0, 0, 0
                      <br />
                      <span>Hex:</span>
                      {' '}
                      #000000
                    </p>
                  </section>
                </article>
              </section>
            </article>
          </section>

          <section className="izoneUse designsystemContainer colorContainer">
            <h2>
              iZone Palette
              <figure className="graphic" title="Small red, rectangle graphic." />
            </h2>

            <article className="large-12 medium-12 small-12 panelColorWrap">
              <section className="large-4 medium-12 small-12 columns">
                <article>
                  <section>
                    <p>
                      <span>Color:</span>
                      {' '}
                      Blue
                      <br />
                      <span>RGB:</span>
                      {' '}
                      60, 149, 207
                      <br />
                      <span>Hex:</span>
                      {' '}
                      #3C95CF
                    </p>
                  </section>
                </article>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <article>
                  <section>
                    <p>
                      <span>Color:</span>
                      {' '}
                      Gold
                      <br />
                      <span>RGB:</span>
                      {' '}
                      255, 159, 25
                      <br />
                      <span>Hex:</span>
                      {' '}
                      #E90101
                    </p>
                  </section>
                </article>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <article>
                  <section>
                    <p>
                      <span>Color:</span>
                      {' '}
                      Black
                      <br />
                      <span>RGB:</span>
                      {' '}
                      0, 0, 0
                      <br />
                      <span>Hex:</span>
                      {' '}
                      #000000
                    </p>
                  </section>
                </article>
              </section>
            </article>
          </section>

          <section className="optionalUse designsystemContainer lightgrayBCK colorContainer">
            <h2>
              Optional Schools Palette
              <figure className="graphic" title="Small red, rectangle graphic." />
            </h2>

            <article className="large-12 medium-12 small-12 panelColorWrap">
              <section className="large-4 medium-12 small-12 columns">
                <article>
                  <section>
                    <p>
                      <span>Color:</span>
                      {' '}
                      Blue
                      <br />
                      <span>RGB:</span>
                      {' '}
                      47, 44, 105
                      <br />
                      <span>Hex:</span>
                      {' '}
                      #2F2C69
                    </p>
                  </section>
                </article>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <article>
                  <section>
                    <p>
                      <span>Color:</span>
                      {' '}
                      Gold
                      <br />
                      <span>RGB:</span>
                      {' '}
                      244, 190, 73
                      <br />
                      <span>Hex:</span>
                      {' '}
                      #F4BE49
                    </p>
                  </section>
                </article>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <article>
                  <section>
                    <p>
                      <span>Color:</span>
                      {' '}
                      Black
                      <br />
                      <span>RGB:</span>
                      {' '}
                      0, 0, 0
                      <br />
                      <span>Hex:</span>
                      {' '}
                      #000000
                    </p>
                  </section>
                </article>
              </section>
            </article>
          </section>
        </main>
      </>
    );
  }
}

export default Color;
