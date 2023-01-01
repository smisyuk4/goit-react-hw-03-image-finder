import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';
import { ImageListItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  return (
    <ImageListItem>
      <img
        className="image-gallery"
        large={largeImageURL}
        src={webformatURL}
        alt={tags}
        loading="lazy"
        height="500"
        width="500"
      />
    </ImageListItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: urlPropType.isRequired,
  largeImageURL: urlPropType.isRequired,
  tags: PropTypes.string.isRequired,
};
