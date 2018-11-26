import React, { Component } from 'react';

class PictureDogs extends Component {
  constructor(props) {
    super(props);
    this.state = { status: false, message: null };
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.state = this.setState(res);
      });
  }

  render() {
    const { status, message } = this.state;
    return (
      status === 'success' ? <img src={message} alt="dog" /> : <div>load dog</div>
    );
  }
}

export default PictureDogs;
