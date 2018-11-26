import React, { Component } from 'react';
import { ClipLoader } from 'react-spinners';

class PictureDogs extends Component {
  constructor(props) {
    super(props);
    this.state = { status: true, message: null };
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
      status === 'success' ? <img src={message} alt="dog" /> : <ClipLoader sizeUnit="px" size={150} color="#123abc" loading={status} />
    );
  }
}

export default PictureDogs;
