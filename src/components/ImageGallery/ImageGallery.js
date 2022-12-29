import { Component } from 'react';
import { fetchImages } from 'Services/fetchImages';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    images: [],
  };

  // componentDidMount() {
  // skeleton
  // }

  componentDidUpdate(prevProps, _) {
    const { search, numberPage } = this.props;

    if (prevProps.search !== search || prevProps.numberPage !== numberPage) {
      fetchImages(search, numberPage)
        .then(({ hits }) => {
          if (hits.length === 0) {
            this.setState({ images: [] });
            //elevate
            this.props.showError(true);
            this.props.showButton(true);
            return;
          }

          this.setState(prevState => {
            if (prevProps.search !== search) {
              return { images: [...hits] };
            }
            return { images: [...prevState.images, ...hits] };
          });
          //elevate
          this.props.showError(false);
          this.props.showButton(false);
        })
        .catch(error => console.log(error));
    }
  }

  render() {
    return (
      <ul className="gallery">
        {this.state.images.map(image => (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            tags={image.tags}
          />
        ))}
      </ul>
    );
  }
}
