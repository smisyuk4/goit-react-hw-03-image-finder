import PropTypes from 'prop-types';

export const ButtonLoadMore = ({ incrementPage }) => {
  return (
    <button type="button" onClick={incrementPage}>
      load more
    </button>
  );
};

ButtonLoadMore.propTypes = {
  incrementPage: PropTypes.func.isRequired,
};
