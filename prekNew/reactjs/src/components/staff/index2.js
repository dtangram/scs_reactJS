/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import PropTypes from 'prop-types';
import RRPropTypes from 'react-router-prop-types';
// import { HashLink as Link } from 'react-router-hash-link';
// import { Container, Row, Col } from 'reactstrap';
import { Link as RRLink } from 'react-router-dom';
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
      lastname: '',
    };

    // this.loadData = this.loadData.bind(this);
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
    });

    this.loadData();
    this.lastnameData();
  }

  loadData = () => {
    const { staffList } = this.state;
    axios.get('http://www.scsk12.org/prekNew/staffAPI.php')
      .then((result) => {
        this.setState({ staffList: result.data });
      });

    // for (let i = 0; i < staffList.length; i += 1) {
    //   const newData = staffList[i];
    //
    //   console.log(newData);
    // }
  };

  lastnameData = () => {
    const { lastname } = this.state;
    axios.get('http://www.scsk12.org/prekNew/staffAPILastname.php')
      .then((result) => {
        this.setState({ lastname: result.data });
      });
  };

  render() {
    const { staffList } = this.state;
    const { lastname } = this.state;
    // let array = [];
    // const phpData = this.loadData();
    //

    // array = staffList;

    const splitLastname = lastname.split(' ');
    // const objLastname = splitLastname.join(' ');

    const split = staffList.split(' ');
    const obj = split.join(' ')
      .replace(/\org/g, 'org"}},\n{{')
      .replace(/\n/g, ' ')
      .replace(/\{\s{1,}/g, '{')
      .replace(/\s{4,}/g, '{')
      .replace(/\s\{\s*$/g, '')
      // .replace(/\s{2,}/, ' ')
      .replace(/\s{2,}/g, '"}, {')
      .replace(/\{/g, '{"')
      .replace(/\{/, '{{')
      .replace(/\}/g, '},')
      .replace(/\{{"/g, '{"fnametext": [{"')
      .replace(/\},},/g, '}]}, {"')
      .replace(/\{",\s{1,}/g, '{"')
      // .replace(/\{"\{\"/g, '{{"')
      .replace(/\{"\{\"/g, '')
      .replace(/\,,/g, ',')
      .split('\'\',');
    // const obj = split.join(']\r[').replace(/[/\[]\]+/g, '').split('\'\',');
    console.log('PHP DATA: ', obj);

    // const newStaffList = () => {
    //   const newData = [];
    //
    //   for (let i = 0; i < staffList.length; i += 1) {
    //     newData.push(staffList);
    //   }
    //
    //   return newData;
    // };

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
                          {item}
                        </span>
                        {splitLastname.length > 0 && splitLastname.map(lastnameItem => (
                          <span key={lastnameItem}>
                            {lastnameItem}
                          </span>
                        ))}
                      </li>
                    </ul>
                  </section>
                ))}

                {
                  // {obj.length > 0 && obj.map(item => (
                  //   <section className="staffSection large-12 medium-12 small-12" key={item}>
                  //     <ul className="large-4 medium-12 small-12 columns">
                  //       <li>
                  //         <span>
                  //           {item.split(/[\',]+/)[0]
                  //             .replace(/[\[\]"']+/g, '')
                  //             .replace(/\s{2,}/, ' ')
                  //             .replace(/\s{2,}/g, '[')}
                  //         </span>
                  //       </li>
                  //     </ul>
                  //   </section>
                  // ))}

                  // {obj.length > 0 && obj.map(item => (
                  //   <section className="staffSection large-12 medium-12 small-12" key={item}>
                  //     <ul className="large-4 medium-12 small-12 columns">
                  //       <li>
                  //         <span>
                  //           {item.split(/[\',]+/)[0].replace(/[\[\]"']+/g, '')
                  //             .replace(/\s{2,}/g, '[')}
                  //         </span>
                  //       </li>
                  //     </ul>
                  //   </section>
                  // ))}
                }
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
