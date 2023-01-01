// https://emotion.sh/docs/media-queries

import styled from '@emotion/styled';

export const Container = styled.main`
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const ImageList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
`;
