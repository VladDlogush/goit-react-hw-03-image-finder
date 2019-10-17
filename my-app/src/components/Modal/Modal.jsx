import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styled from './Modal.module.css';

class Modal extends Component {
  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEsc);
  }

  handleEsc = e => {
    const { closeModal } = this.props;

    if (e.keyCode === 27) closeModal();
  };

  handleKeyPress = e => {
    const { closeModal } = this.props;
    if (e.target === this.backdropRef.current) closeModal();
  };

  render() {
    const { modalImage } = this.props;
    return (
      <div
        role="presentation"
        className={styled.overlay}
        ref={this.backdropRef}
        onClick={this.handleKeyPress}
      >
        <div className={styled.modal}>
          <img src={modalImage} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modalImage: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
