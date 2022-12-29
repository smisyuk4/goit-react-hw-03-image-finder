import PropTypes from 'prop-types';

export const Message = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
};
