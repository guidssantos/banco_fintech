import styled, { css } from 'styled-components';
export const Wrapper = styled.div`
${({ theme }) => css`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1{
    margin-top: ${theme.font.sizes.large};
    font-size: ${theme.font.sizes.xxlarge};
  }

  p{
    font-size: ${theme.font.sizes.small};
    font-weight: 500;
    width: 800px;
    margin-bottom: ${theme.spacings.xhuge};
  }

  img{
    width: 50%;
    margin-bottom: ${theme.spacings.large};
  }

@media ${theme.media.lteMedium} {
  p{
    width: 80%;
  }
  img{
    width: 100%;
  }
}

@media ${theme.media.lteSmall} {
  h1{
    font-size: ${theme.font.sizes.large};
  }

  p{
    font-size: calc(${theme.font.sizes.small} - .4rem);
  }
}
`}
`;
