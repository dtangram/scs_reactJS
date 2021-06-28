/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import PropTypes from 'prop-types';
import RRPropTypes from 'react-router-prop-types';
// import { HashLink as Link } from 'react-router-hash-link';
// import { Container, Row, Col } from 'reactstrap';
import { Link as a } from 'react-router-dom';
import axios from 'axios';
import ScrollBTN from '../scrollBTN';
import prekHeaderImage3 from '../../img/2019/prekHeaderImage3.jpg';
import WEare901 from '../../img/2019/WEare901.png';
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

class Staff extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      staffList: '',
    };
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
    });

    this.loadData();
  }

  loadData = () => {
    const { staffList } = this.state;
    axios.get('http://www.scsk12.org/prekNew/staffAPI.php')
      .then((result) => {
        this.setState({ staffList: result.data });
      });
  };

  render() {
    const { staffList } = this.state;

    const split = staffList.split(' ');
    const obj = split.join(' ')
      .replace(/\n{2,}/, '')
      .replace(/\n{3,}/g, '')
      .replace(/\s{3,}/g, '')
      .replace(/416/g, '  416')
      .replace(/org/g, 'org, ')
      .split(', ');

    console.log('PHP DATA: ', obj.pop());

    return (
      <>
        <ScrollBTN />

        <article id="staffWrap" className="prekImg large-12">
          <h1 className="larg-12 medium-12 small-12">
            Staff
            <figure className="graphic" alt="Small red, rectangle graphic." />
          </h1>

          <figure className="overlayHeaderBCK" alt="Pre-k team members at pre-k screening" />
        </article>

        <article id="prekContainer" className="staff">
          {
            // start middle row
          }
          <section id="resizer" className="row">
            <article className="prekWrapper large-12 medium-12 small-12">
              <section className="large-12">
                <h2 className="prekH2">
                  STAFF
                  <figure className="graphic" alt="Small red, rectangle graphic." />
                </h2>

                {obj.length > 0 && obj.map(item => (
                  <section className="staffSection large-12 medium-12 small-12" key={item}>
                    <ul className="large-4 medium-12 small-12 columns">
                      <li>
                        <span>
                          {item.replace(/\s{1,}/, ' ').split(/\s{2,}/g)[0]}
                        </span>
                      </li>

                      <li>
                        <span>
                          {item.replace(/\s{1,}/, ' ').split(/\s{2,}/g)[1]}
                        </span>
                      </li>
                    </ul>

                    <p className="large-4 medium-12 small-12 columns">{item.replace(/\s{1,}/, ' ').split(/\s{2,}/g)[2]}</p>

                    <p className="large-4 medium-12 small-12 columns slideUnder">
                      {item.replace(/\s{1,}/, ' ').split(/\s{2,}/g)[3]}
                      <br />
                      <a href={`mailto:${item.replace(/\s{1,}/, ' ').split(/\s{2,}/g)[4]}`}>{item.replace(/\s{1,}/, ' ').split(/\s{2,}/g)[4]}</a>
                    </p>
                  </section>
                ))}
              </section>
            </article>
          </section>

          <section className="prekImg">
            <section className="large-12 medium-12 small-12">
              <h2 className="prekH2">
                Begin the Journey to College and Career Readiness!
              </h2>
              <figure className="img901 large-5 medium-7 small-10"><img src={WEare901} alt="Logo of WE are 901" /></figure>
            </section>
            <figure className="prekRequireBck" />
            <figure className="prekOverlay" />
          </section>
        </article>
      </>
    );
  }
}

export default Staff;
