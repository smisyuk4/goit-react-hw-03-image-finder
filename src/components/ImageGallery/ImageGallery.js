import { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchImages } from 'Services/fetchImages';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Blocks } from 'react-loader-spinner';
import { imgTemplate } from './ImageTemplate';
import { Container } from './ImageGallery.styled';

const INITIAL_VALUE = {
  images: [],
  loading: false,
  totalHits: null,
  imgPerPage: 12,
};
export class ImageGallery extends Component {
  state = {
    ...INITIAL_VALUE,
    images: [...imgTemplate],
  };

  componentDidUpdate(prevProps, _) {
    const { search, numberPage, showError, hideButton } = this.props;
    const { imgPerPage } = this.state;

    if (prevProps.search !== search || prevProps.numberPage !== numberPage) {
      this.setState({ loading: true });

      fetchImages(search, imgPerPage, numberPage)
        .then(({ totalHits, hits }) => {
          if (hits.length === 0) {
            this.setState({ ...INITIAL_VALUE });
            showError(true);
            hideButton(true);
            return;
          }

          this.setState(prevState => {
            if (prevProps.search !== search) {
              console.log('totalHits ' + totalHits);
              return { images: [...hits], totalHits };
            }
            return { images: [...prevState.images, ...hits] };
          });

          //elevate
          // showError(false);
          // if (totalHits === images.length) {
          //   console.log('inside ' + totalHits, images.length);
          //   return hideButton(true);
          // }

          // if (totalHits > images.length) {
          //   console.log('outside ' + totalHits, images.length);
          //   return hideButton(false);
          // }
        })
        .catch(error => console.log(error))
        .finally(() => this.setState({ loading: false }));

      // this.checkContent(showError, hideButton);
    }
  }

  checkContent = (showError, hideButton) => {
    // const { totalHits, images } = this.state;

    showError(false);
    hideButton(false);
    console.log('checkContent');
    // if (totalHits === images.length) {
    //   console.log('inside ' + totalHits, images.length);
    //   return hideButton(true);
    // }

    // if (totalHits > images.length) {
    //   console.log('outside: ' + totalHits, images.length);
    //   return hideButton(false);
    // }
  };

  showLargeImg = ({ target }) => {
    const { initialModal, showModal } = this.props;

    if (target.nodeName !== 'IMG') {
      return;
    }

    //elevate data to modal
    const link = target.getAttribute('large');
    const alt = target.getAttribute('alt');
    initialModal({ link, alt });
    showModal();
  };

  render() {
    const { loading, images } = this.state;
    // const { showError, hideButton } = this.props;
    // {
    //   showError(false);

    //   if (totalHits === images.length) {
    //     console.log('inside ' + totalHits, images.length);
    //     return hideButton(true);
    //   }

    //   if (totalHits > images.length) {
    //     console.log('outside: ' + totalHits, images.length);
    //     return hideButton(false);
    //   }
    // }

    return (
      <Container>
        {loading && (
          <Blocks
            visible={true}
            ariaLabel="blocks-loading"
            wrapperClass="blocks-wrapper"
          />
        )}

        <ImageList onClick={this.showLargeImg}>
          {images.map(({ id, largeImageURL, webformatURL, tags }) => (
            <ImageGalleryItem
              key={id}
              largeImageURL={largeImageURL}
              webformatURL={`${webformatURL}?w=248&fit=crop&auto=format`}
              tags={tags}
            />
          ))}
        </ImageList>
      </Container>
    );
  }
}
ImageGallery.propTypes = {
  search: PropTypes.string.isRequired,
  numberPage: PropTypes.number.isRequired,
  showError: PropTypes.func.isRequired,
  hideButton: PropTypes.func.isRequired,
};
