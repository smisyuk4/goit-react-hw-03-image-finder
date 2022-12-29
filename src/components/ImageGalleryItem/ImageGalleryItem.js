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
