/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';

class ScrollBTN extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <>
        <section className="scroll-top-wrapper ">
          <span className="scroll-top-inner">
            <i className="fa fa-chevron-up" />
          </span>
        </section>
      </>
    );
  }
}

export default ScrollBTN;
