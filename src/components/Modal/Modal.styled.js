import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWrp = styled.div`
  position: absolute;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 5px;

  border: none;
  background-color: inherit;
  color: #3f51b5;

  &:hover,
  &:focus {
    color: red;
  }
`;

export const Image = styled.img`
  max-height: calc(100vh - 24px);
  max-width: calc(100vw - 48px);
`;
