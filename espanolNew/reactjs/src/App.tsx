/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
// import { HashRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/home';

class App extends Component {
  render() {
    return (
      <Router>
        {
          // USE THESE TWO ROUTES FOR BUILD
        }
        <Route path="" exact component={Home} />
      </Router>
    );
  }
}

export default App;

// const espanolContentAPI = axioURL('http://www.scsk12.org/espanolNew/phpMySQLAPI.php', setEspanolContent);
// const rotateBCKAPI: any = axioURL('http://www.scsk12.org/espanolNew/rotateBckAPI.php', setRotateBCK);
// const rotateBCK2API: any = axioURL('http://www.scsk12.org/espanolNew/rotateBckAPI2.php', setRotateBCK2);
// const rotateBCK3API: any = axioURL('http://www.scsk12.org/espanolNew/rotateBckAPI3.php', setRotateBCK3);
// const matLinksAPI = axioURL('http://www.scsk12.org/espanolNew/matAPI.php', setMatLinks);
// const servLinksAPI = axioURL('http://www.scsk12.org/espanolNew/servAPI.php', setServLinks);
// const recLinksAPI = axioURL('http://www.scsk12.org/espanolNew/recAPI.php', setRecLinks);
//
//
// // let objRotateBCK: Array<string> = [];
// // let objRotateBCK2: Array<string> = [];
// // let objRotateBCK3: Array<string> = [];
//
// const split = espanolContent.split(' ');
// const obj = split.join(' ')
//   .replace(/\s{1,}/, '')
//   .replace(/\n{2,}/, '')
//   .replace(/\n{3,}/g, '')
//   .replace(/\s{3,}/g, ',  ')
//   .replace(/\&#34;/g, '"')
//   .split(',  ');
//
// console.log('OBJ DATA: ', obj);
//
// const strArr = (api: string, apiObj: Array<string>, log: string) => {
//   const apiSplit = api.split(' ');
//   apiObj = apiSplit.join(' ')
//     .replace(/\n{2,}/, '')
//     .replace(/\n{3,}/g, '')
//     .replace(/\s{3,}/g, ',  ')
//     .split(',  ');
//
//   console.log(log, apiObj.shift());
// };
//
// console.log('rotateBCKAPI: ', rotateBCKAPI);
//
// const objRotateBCK = strArr(rotateBCK, rotateBCKAPI, 'ROTATE IMAGE DATA: ');
// const objRotateBCK2 = strArr(rotateBCK2, rotateBCK2API, 'ROTATE IMAGE DATA 2: ');
// const objRotateBCK3 = strArr(rotateBCK3, rotateBCK3API, 'ROTATE IMAGE DATA 3: ');
//
// console.log('objRotateBCK: ', objRotateBCK);
