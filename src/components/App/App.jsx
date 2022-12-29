import { Component } from 'react';

import { SearchBar } from 'components/SearchBar';
import { Message } from 'components/Message';
import { ImageGallery } from 'components/ImageGallery';
import { ButtonLoadMore } from 'components/ButtonLoadMore';

const INITIAL_VALUE = {
  numberPage: 1,
  isHideButton: true,
  isErrorLoad: false,
}

export class App extends Component {
  state = {
    search: '',
    ...INITIAL_VALUE
  };

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
