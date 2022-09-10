import styled, { css } from 'styled-components';
export const Wrapper = styled.div`
${({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    padding-top: 50px;
    text-align: center;
    width: 700px;
    font-size: ${theme.font.sizes.xxlarge};
  }

  p{
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.medium};
    text-align: center;
    width: 550px;
  }

`}
`;
