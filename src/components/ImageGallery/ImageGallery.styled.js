import styled from '@emotion/styled';
import ImageList from '@mui/material/ImageList';

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const ImageListStyles = styled(ImageList)`
  column-count: 4;
  column-gap: 10px;
  /* border: 2px solid black;
  background-color: grey; */
`;
