import { Component } from 'react';

import { SearchBar } from 'components/SearchBar';
import { Message } from 'components/Message';
import { ImageGallery } from 'components/ImageGallery';
import { ButtonLoadMore } from 'components/ButtonLoadMore';
import { Modal } from 'components/Modal';

const INITIAL_VALUE = {
  numberPage: 1,
  isHideButton: true,
  isErrorLoad: false,
}

export class App extends Component {
  state = {
    isShowModal: true,
    search: '',
    ...INITIAL_VALUE
  };

  toggleModal = () => {
    this.setState(({isShowModal}) => ({
      isShowModal: !isShowModal
    }))
  }

  handleSubmit = ({ search }) => {
    this.setState({ search, ...INITIAL_VALUE });
  };

  showButton = status => {
    this.setState({ isHideButton: status });
  };

  incrementPage = () => {
    //need scroll page

    this.setState(prevState => {
      return { numberPage: prevState.numberPage + 1 };
    });
  };

  showError = status => {
    this.setState({ isErrorLoad: status });
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

  render() {
    return (
      <div>
        {this.state.isShowModal && <Modal largeImageURL={"https://pixabay.com/get/g5cf265fec443ad37c91b25927e24495add57c82f4457f5c169580e5dfe0db5a20aeac13ded549f500a8a1f28283df0abba7d7e2a96a9b3ff0935b4f398ef67b7_640.jpg"} tags={'alt'} onClose={this.toggleModal} />}
        
        <SearchBar handleSubmit={this.handleSubmit} />

        {this.state.isErrorLoad && (
          <Message text="status 200, but not images" />
        )}
       
        <ImageGallery
          search={this.state.search}
          numberPage={this.state.numberPage}
          showButton={this.showButton}
          showError={this.showError}
        />

        {!this.state.isHideButton && (
          <ButtonLoadMore incrementPage={this.incrementPage} />
        )}
      </div>
    );
  }
}
