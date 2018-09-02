import React, { Component } from 'react';

// local
import 'styles.css';
import clothing from 'data/clothing';
import Modal from 'components/Modal';
import Home from 'components/Home';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
      piece: 0
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(piece) {
    this.setState({modalIsOpen: true, piece });
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const { piece } = this.state;
    const item = clothing[piece];
    return (this.state.modalIsOpen) ?
      <Modal item={item} closeModal={this.closeModal}/> :
      <Home item={clothing[0]} openModal={this.openModal}/>
  }
}

export default App;
