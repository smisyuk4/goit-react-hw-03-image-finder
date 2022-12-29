import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  return (
    <li>
      <img
        src={webformatURL}
        alt={tags}
        large-image={largeImageURL}
        width="200"
        height="200"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: urlPropType.isRequired,
  largeImageURL: urlPropType.isRequired,
  tags: PropTypes.string.isRequired,
};
