import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';
import { Overlay, ModalWrp, ButtonClose } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = ({ code }) => {
    if (code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickOverlay = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags, onClose } = this.props;

    return createPortal(
      <Overlay onClick={this.handleClickOverlay}>
        <ModalWrp>
          <img src={largeImageURL} alt={tags} width="1000" height="700" />
          <ButtonClose onClick={onClose} type="button">
            close modal
          </ButtonClose>
        </ModalWrp>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  largeImageURL: urlPropType.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
