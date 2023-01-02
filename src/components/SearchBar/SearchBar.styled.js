import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 24px;
  padding-left: 24px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 1100;

  min-height: 44px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 20px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const FormWrp = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const InputWrp = styled(Field)`
  position: relative;
  display: inline-block;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const ErrorMsg = styled.span`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -2px);

  min-width: 320px;
  text-transform: uppercase;
  text-align: center;
  color: #ff9696;
`;

export const ButtonSearch = styled.button`
  display: inline-block;
  padding: 5px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  color: #3f51b5;

  &:hover,
  &:focus {
    opacity: 1;
    background-color: #b2b9e2;
  }
`;
