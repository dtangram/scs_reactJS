/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import PropTypes from 'prop-types';
import RRPropTypes from 'react-router-prop-types';
import { Link as a } from 'react-router-dom';
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      espanolContent: '',
      rotateBCK: '',
      rotateBCK2: '',
      rotateBCK3: '',
      matLinks: '',
      servLinks: '',
      recLinks: '',
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    const {
      espanolContent,
      rotateBCK,
      rotateBCK2,
      rotateBCK3,
      matLinks,
      servLinks,
      recLinks,
    } = this.state;

    axios.get('http://www.scsk12.org/espanolNew/phpMySQLAPI.php')
      .then((result) => {
        this.setState({ espanolContent: result.data });
      });

    axios.get('http://www.scsk12.org/espanolNew/rotateBckAPI.php')
      .then((result) => {
        this.setState({ rotateBCK: result.data });
      });

    axios.get('http://www.scsk12.org/espanolNew/rotateBckAPI2.php')
      .then((result) => {
        this.setState({ rotateBCK2: result.data });
      });

    axios.get('http://www.scsk12.org/espanolNew/rotateBckAPI3.php')
      .then((result) => {
        this.setState({ rotateBCK3: result.data });
      });

    axios.get('http://www.scsk12.org/espanolNew/matAPI.php')
      .then((result) => {
        this.setState({ matLinks: result.data });
      });

    axios.get('http://www.scsk12.org/espanolNew/servAPI.php')
      .then((result) => {
        this.setState({ servLinks: result.data });
      });

    axios.get('http://www.scsk12.org/espanolNew/recAPI.php')
      .then((result) => {
        this.setState({ recLinks: result.data });
      });

    // const axioURL = (url, stateVar) => {
    //   const axObj = {
    //     url,
    //     stateVarNew: stateVar,
    //   };
    //
    //   // axObj.url = url;
    //   // axObj.stateVarNew = stateVarNew;
    //
    //   axObj.axObjFunc = () => {
    //     axios.get(axObj.url)
    //       .then((res) => {
    //         this.setState({ [axObj.stateVar]: res.data });
    //       });
    //   };
    //
    //   return axObj;
    // };
    //
    // const espanolContentAPI = axioURL('http://www.scsk12.org/espanolNew/phpMySQLAPI.php', espanolContent).axObjFunc();
    // const rotateBCKAPI = axioURL('http://www.scsk12.org/espanolNew/phpMySQLAPI.php', rotateBCK).axObjFunc();
    // const rotateBCK2API = axioURL('http://www.scsk12.org/espanolNew/phpMySQLAPI.php', rotateBCK2).axObjFunc();
    // const rotateBCK3API = axioURL('http://www.scsk12.org/espanolNew/phpMySQLAPI.php', rotateBCK3).axObjFunc();
    // const matLinksAPI = axioURL('http://www.scsk12.org/espanolNew/phpMySQLAPI.php', matLinks).axObjFunc();
    // const servLinksAPI = axioURL('http://www.scsk12.org/espanolNew/phpMySQLAPI.php', servLinks).axObjFunc();
    // const recLinksAPI = axioURL('http://www.scsk12.org/espanolNew/phpMySQLAPI.php', recLinks).axObjFunc();
  };

  render() {
    const {
      espanolContent,
      rotateBCK,
      rotateBCK2,
      rotateBCK3,
      matLinks,
      servLinks,
      recLinks,
    } = this.state;

    const split = espanolContent.split(' ');
    const obj = split.join(' ')
      .replace(/\s{1,}/, '')
      .replace(/\n{2,}/, '')
      .replace(/\n{3,}/g, '')
      .replace(/\s{3,}/g, ',  ')
      .replace(/\&#34;/g, '"')
      .split(',  ');

    console.log('OBJ DATA: ', obj);

    const splitRotateBCK = rotateBCK.split(' ');
    const objRotateBCK = splitRotateBCK.join(' ')
      .replace(/\n{2,}/, '')
      .replace(/\n{3,}/g, '')
      .replace(/\s{3,}/g, ',  ')
      .split(',  ');

    console.log('ROTATE IMAGE DATA: ', objRotateBCK.shift());

    const splitRotateBCK2 = rotateBCK2.split(' ');
    const objRotateBCK2 = splitRotateBCK2.join(' ')
      .replace(/\n{2,}/, '')
      .replace(/\n{3,}/g, '')
      .replace(/\s{3,}/g, ',  ')
      .split(',  ');

    console.log('ROTATE IMAGE DATA 2: ', objRotateBCK2.shift());

    const splitRotateBCK3 = rotateBCK3.split(' ');
    const objRotateBCK3 = splitRotateBCK3.join(' ')
      .replace(/\n{2,}/, '')
      .replace(/\n{3,}/g, '')
      .replace(/\s{3,}/g, ',  ')
      .split(',  ');

    console.log('ROTATE IMAGE DATA 3: ', objRotateBCK3.shift());

    const splitMatLinks = matLinks.split(' ');
    const objMatLinks = splitMatLinks.join(' ')
      .replace(/\n{2,}/, '')
      .replace(/\n{3,}/g, '')
      .replace(/\s{3,}/g, ',  ')
      .split(',  ');

    console.log('MAT LINKS DATA: ', objMatLinks.shift());

    const splitServLinks = servLinks.split(' ');
    const objServLinks = splitServLinks.join(' ')
      .replace(/\n{2,}/, '')
      .replace(/\n{3,}/g, '')
      .replace(/\s{3,}/g, ',  ')
      .split(',  ');

    console.log('SERV LINKS DATA: ', objServLinks.shift());

    const splitRecLinks = recLinks.split(' ');
    const objRecLinks = splitRecLinks.join(' ')
      .replace(/\n{2,}/, '')
      .replace(/\n{3,}/g, '')
      .replace(/\s{3,}/g, ',  ')
      .split(',  ');

    console.log('REC LINKS DATA: ', objRecLinks.shift());

    return (
      <>
        <section className="somos901 large-12 large-small">
          <figure />
        </section>

        <section className="espanolCopy">
          <p className="copy">{obj[0]}</p>
        </section>

        <hr />

        <article>
          <section className="espanolCopy">
            <h2>Noticias Importante</h2>
            <hr />
          </section>

          {
            // SLIDESHOW
          }
          <section id="bck" className="large-12 small-12 espanolCopy">
            <ul id="bckRotate" className="imgWrapper">
              <li className="current">
                <a href={`${objRotateBCK[0]}`} target="_blank">
                  <img src={`http://www.scsk12.org/espanolNew/img/${objRotateBCK2[0]}`} alt={objRotateBCK3[0]} />
                </a>
              </li>
              <li>
                <a href={`${objRotateBCK[1]}`} target="_blank">
                  <img src={`http://www.scsk12.org/espanolNew/img/${objRotateBCK2[1]}`} alt={objRotateBCK3[1]} />
                </a>
              </li>
              <li>
                <a href={`${objRotateBCK[2]}`} target="_blank">
                  <img src={`http://www.scsk12.org/espanolNew/img/${objRotateBCK2[2]}`} alt={objRotateBCK3[2]} />
                </a>
              </li>
              <li>
                <a href={`${objRotateBCK[3]}`} target="_blank">
                  <img src={`http://www.scsk12.org/espanolNew/img/${objRotateBCK2[3]}`} alt={objRotateBCK3[3]} />
                </a>
              </li>
            </ul>

            {
              // {objRotateBCK.map(images => (
              //   <li key={images}>
              //     <a href={`${images.split(/\s{2,}/g)[0]}`} target="_blank">
              //       <img src={`http://www.scsk12.org/espanolNew/img/${images.split(/\s{2,}/g)[1]}`} alt={images.split(/\s{2,}/g)[2]} />
              //     </a>
              //   </li>
              // ))}

              // {objRotateBCK.map(images => (
              //   <li>
              //     {objRotateBCK2.map(images2 => (
              //       <a href={`${images.split(/\s{2,}/g)[0]}`} target="_blank">
              //         {objRotateBCK3.map(images3 => (
              //           <img src={`http://www.scsk12.org/espanolNew/img/${images2.split(/\s{2,}/g)[0]}`} alt={images3.split(/\s{2,}/g)[0]} />
              //         ))}
              //       </a>
              //     ))}
              //   </li>
              // ))}
            }
          </section>

          <section id="cirWrap" className="large-12 small-12">
            <ul id="circles" className="large-6 large-centered small-6 small-centered">
              <li className="currentCir">
                <button type="button" name="button" />
              </li>
              <li>
                <button type="button" name="button" />
              </li>
              <li>
                <button type="button" name="button" />
              </li>
              <li>
                <button type="button" name="button" />
              </li>
            </ul>
          </section>

          <section className="espanolCopy">
            <p className="calendar copy">
              <a href="http://www.scsk12.org/calendar/">
                <i className="fa fa-calendar" aria-hidden="true" />
                Ver el Calendario de SCS
              </a>
            </p>
          </section>

          <section id="welcomeWrap" className="large-12">
            <article className="espanolCopy">
              <h2>¿Necesita ayuda?</h2>
              <hr />

              <p className="copy">
                {obj[1]}
                &nbsp;
                <a href="http://www.scsk12.org/welcome/">
                  Haga clic aquí
                </a>
                .
              </p>
            </article>

            <article className="espanolCopy">
              <section className="headingThree">
                <p className="copy">
                  <a href="#" target="_blank">
                    Haga clic aquí
                  </a>
                  .
                </p>
              </section>

              <section className="welcomeBck" title="Picture of Families">
                <figure>
                  <img
                    src={`http://www.scsk12.org/espanolNew/img/${obj[2]}`}
                    alt="Hispanic children at festival"
                  />
                </figure>
              </section>
            </article>
          </section>

          <section className="espanolCopy">
            <h2>Enlaces Rápidos</h2>
            <hr />

            <p className="copy">
              {obj[3]}
            </p>
          </section>
        </article>

        <article className="large-12">
          <section className="large-12 small-12 wrapperOne">
            <article className="img-style">
              <section className="listOne">
                <article className="large-4 small-12 columns">
                  <section>
                    <article>
                      <section>
                        <p className="heading">Matrículas</p>

                        <hr />

                      </section>

                      <section className="overlay" />

                      <figure>
                        <img src="http://www.scsk12.org/espanolNew/img/espanolImg1.jpg" title="Student Enrollment" alt="Spanish kids giving a thumbs up" />
                      </figure>
                    </article>
                  </section>

                  <section className="listWrap">
                    <article className="espanolLinks">
                      <p>
                        <span>
                          Matrículas
                        </span>
                      </p>

                      <hr />

                      <ul>
                        {objMatLinks.map(linksMat => (
                          <>
                            <li className="slideUnder" key={linksMat}>
                              <a href={`${linksMat.split(/\s{2,}/g)[0]}`}>
                                {linksMat.split(/\s{2,}/g)[1]}
                              </a>
                            </li>
                            <br />
                          </>
                        ))}
                      </ul>
                    </article>
                  </section>
                </article>

                <article className="large-4 small-12 columns">
                  <section>
                    <article>
                      <section>
                        <p className="heading">Servicios Estudiantiles</p>
                        <hr />
                      </section>

                      <section className="overlay" />

                      <figure>
                        <img src="http://www.scsk12.org/espanolNew/img/espanolImg2.jpg" title="Student Services" alt="Many young students hugging teacher" />
                      </figure>
                    </article>
                  </section>

                  <section className="listWrap">
                    <article className="espanolLinks">
                      <p>
                        <span>
                          Servicios Estudiantiles
                        </span>
                      </p>

                      <hr />

                      <ul>
                        {objServLinks.map(linksServ => (
                          <>
                            <li className="slideUnder" key={linksServ}>
                              <a href={`${linksServ.split(/\s{2,}/g)[0]}`}>
                                {linksServ.split(/\s{2,}/g)[1]}
                              </a>
                            </li>
                            <br />
                          </>
                        ))}
                      </ul>
                    </article>
                  </section>
                </article>

                <article className="large-4 small-12 columns">
                  <section>
                    <article>
                      <section>
                        <p className="heading">Recursos</p>
                        <hr />
                      </section>

                      <section className="overlay" />

                      <figure><img src="http://www.scsk12.org/espanolNew/img/espanolImg3.jpg" title="Resources" alt="Young student at computer wearing headphones" /></figure>
                    </article>
                  </section>

                  <section className="listWrap">
                    <article className="espanolLinks">
                      <p>
                        <span>
                          Recursos
                        </span>
                      </p>

                      <hr />

                      <ul>
                        {objRecLinks.map(linksRec => (
                          <>
                            <li className="slideUnder" key={linksRec}>
                              <a href={`${linksRec.split(/\s{2,}/g)[0]}`}>
                                {linksRec.split(/\s{2,}/g)[1]}
                              </a>
                            </li>
                            <br />
                          </>
                        ))}
                      </ul>
                    </article>
                  </section>
                </article>
              </section>
            </article>
          </section>

          <hr />

          <section className="large-12 espanolCopy">
            <h2>Conéctese con nosotros - Redes Sociales</h2>

            <hr />

            <p className="copy">
              {obj[5]}
              &nbsp;
              <a href="#">Haga clic aquí</a>
              .
            </p>
          </section>

          <section className="large-12 social">
            <article className="large-12 small-12">
              <section className="large-6 columns">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSCSK12Espanol%2F&tabs=timeline&width=310&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="310"
                  height="500"
                  scrolling="no"
                  frameBorder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                />
              </section>

              <section className="large-6 columns twitterFeed">
                <a className="twitter-timeline" href="https://twitter.com/SCSK12Espanol?ref_src=twsrc%5Etfw">Tweets by SCSK12Espanol</a>
              </section>
            </article>
          </section>
        </article>
      </>
    );
  }
}

export default Home;
