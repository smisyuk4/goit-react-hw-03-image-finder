import PropTypes from 'prop-types';
import { LoadMoreBtn } from './ButtonLoadMore.styled';

export const ButtonLoadMore = ({ incrementPage }) => {
  return (
    <LoadMoreBtn type="button" onClick={incrementPage}>
      load more
    </LoadMoreBtn>
  );
};

ButtonLoadMore.propTypes = {
  incrementPage: PropTypes.func.isRequired,
};
