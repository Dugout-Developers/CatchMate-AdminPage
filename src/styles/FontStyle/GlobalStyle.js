import { createGlobalStyle } from 'styled-components';

const fontWeights = {
  regular: 400,
  medium: 500,
  semiBold: 600,
};

export const theme = {
  fontWeights,
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  body {
    font-family: 'Pretendard', sans-serif;
  }
`;
