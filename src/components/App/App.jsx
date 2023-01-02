import { Component } from 'react';

import { SearchBar } from 'components/SearchBar';
import { Message } from 'components/Message';
import { ImageGallery } from 'components/ImageGallery';
// import { ButtonLoadMore } from 'components/ButtonLoadMore';
import { Modal } from 'components/Modal';


const INITIAL_VALUE = {
  // numberPage: 1,
  // isShowButton: false,
  isErrorLoad: false,
  isShowModal: false,
  largeImg: {},
}

export class App extends Component {
  state = {
    search: '',
    ...INITIAL_VALUE
  };

  showModal = () => {
    this.setState(({isShowModal}) => ({
      isShowModal: !isShowModal
    }))
  }

  handleSubmit = ({ search }) => {
    this.setState({ search, ...INITIAL_VALUE });
  };

  showError = status => { 
    this.setState({ isErrorLoad: status });

    setTimeout(() => {
      this.setState({ isErrorLoad: !status });
    }, 2000);
  };

  scrollWindow = () => {
    //  const { height: cardHeight } = document.
    //     querySelector(".gallery")
    //     .firstElementChild
    //     .getBoundingClientRect();
    // //when draw new markup - do one scrol < 2 height card
    // window.scrollBy({
    //     top: cardHeight * 1.8,
    //     behavior: 'smooth',
    // });
  };

  initialModal = (data) => {
    this.setState({largeImg: data})
  }

  render() {
    const {isShowModal, largeImg, isErrorLoad, search } = this.state
    return (
      <div>
        {isShowModal && <Modal largeImageURL={largeImg.link} tags={largeImg.alt} onClose={this.showModal} />}
        
        <SearchBar handleSubmit={this.handleSubmit} />

        {isErrorLoad && (
          <Message text="status 200, but not images" />
        )}
       
        <ImageGallery
          search={search}
          initialModal={this.initialModal}
          showModal={this.showModal}
          showError={this.showError}
        />
      </div>
    );
  }
}
