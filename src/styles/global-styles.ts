import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
    color: ${({ theme }) => theme.colors.darkText}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.default};
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primary}
  }

  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }

  ul, ol, li{
    list-style-type: none;
  }


  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    cursor: pointer;
  }

  .table {
    width: 100%;
    overflow-y: auto;
  }
`;
