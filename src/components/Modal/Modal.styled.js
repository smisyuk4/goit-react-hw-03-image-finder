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
  border: 2px solid red;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;
