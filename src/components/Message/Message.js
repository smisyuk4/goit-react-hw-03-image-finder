import PropTypes from 'prop-types';
import { ErrorMsg } from './Message.styled';

export const Message = ({ text }) => {
  return <ErrorMsg>{text}</ErrorMsg>;
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
};
