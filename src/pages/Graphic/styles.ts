import styled, { css } from 'styled-components';
export const Wrapper = styled.div`
${({ theme }) => css`
padding-top: ${theme.spacings.small};
  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    width: 50%;
  }

  h1{
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

@media ${theme.media.lteMedium} {
  h1{
    width: 100%;
  }

  p{
    width: 80%;
    font-size: ${theme.font.sizes.small};
  }

  img{
    width: 100%;
  }
}

@media ${theme.media.lteSmall} {
  h1{
    font-size: ${theme.font.sizes.medium};
  }

  p{
    font-size: calc(${theme.font.sizes.small} - .4rem);
  }
}

`}
`;
