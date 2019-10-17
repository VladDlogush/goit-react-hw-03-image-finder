import React, { Component } from 'react';
import Gallery from '../Gallery/Gallery';
import Modal from '../Modal/Modal';
import SearchForm from '../SearchForm/SearchForm';
import Loader from '../Loader/Loader';
import styled from './App.module.css';
import getImages from '../../services/getApi';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    toggle: false,
    modalImage: false,
    query: '',
    scroll: 1200,
    isLoading: false,
  };

  fetchImages = query => {
    this.setState(
      {
        images: [],
        query,
        toggle: false,
        currentPage: 1,
        isLoading: true,
      },
      () => {
        const { currentPage } = this.state;
        getImages(currentPage, query)
          .then(response => this.setState({ images: [...response] }))
          .catch(err => console.log(err))
          .finally(() => this.setState({ isLoading: false, toggle: true }));
      },
    );
  };

  openModal = image => {
    this.setState({ modalImage: image });
  };

  closeModal = () => {
    this.setState({ modalImage: null });
  };

  handleButton = () => {
    this.setState(
      state => ({ currentPage: state.currentPage + 1 }),

      () => {
        const { currentPage, query } = this.state;
        getImages(currentPage, query)
          .then(response =>
            this.setState(state => ({
              images: [...state.images, ...response],
            })),
          )
          .catch(err => console.log(err))
          .finally(() => {
            this.setState(
              state => ({ scroll: state.scroll + 1500 }),
              () => {
                const { scroll } = this.state;
                window.scrollTo({
                  top: scroll,
                  behavior: 'smooth',
                });
              },
            );
          });
      },
    );
  };

  render() {
    const { images, toggle, modalImage, isLoading } = this.state;
    return (
      <div className={styled.app}>
        <SearchForm onSubmit={this.fetchImages} />
        {isLoading && <Loader />}
        <Gallery images={images} openModal={this.openModal} />
        {modalImage && (
          <Modal modalImage={modalImage} closeModal={this.closeModal} />
        )}
        {toggle && (
          <button
            type="button"
            className={styled.button}
            onClick={this.handleButton}
          >
            Load more
          </button>
        )}
      </div>
    );
  }
}

export default App;
