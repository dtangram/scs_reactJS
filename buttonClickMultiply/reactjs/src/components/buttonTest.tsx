/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Button } from '@material-ui/core';

class ButtonTest extends React.Component<any, any> {
  constructor(props: string) {
    super(props);
    this.state = {
      buttonOn: false,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };

    this.sampleList = this.sampleList.bind(this);
  }

  sampleList = () => {
    const { buttonOn, list } = this.state;

    this.setState({
      buttonOn: !buttonOn,
      list: list.map((item: number, index: number) => item * index),
    });
  };

  render() {
    const { buttonOn, list } = this.state;
    return (
      <>
        <Button variant="contained" color="primary" style={{ margin: '500px auto 10px' }} onClick={this.sampleList}>On</Button>

        {buttonOn ? (
          <section style={{ background: '#FFF', margin: '0 auto' }}>
            <p>{list[0]}</p>
            <p>{list[1]}</p>
            <p>{list[2]}</p>
            <p>{list[3]}</p>
            <p>{list[4]}</p>
            <p>{list[5]}</p>
            <p>{list[6]}</p>
            <p>{list[7]}</p>
            <p>{list[8]}</p>
            <p>{list[9]}</p>
          </section>
        ) : (
          <section />
        )}
      </>
    );
  }
}

export default ButtonTest;
