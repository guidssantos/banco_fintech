import styled, { css } from 'styled-components';
export const Wrapper = styled.div`
${({ theme }) => css`
  padding: ${theme.spacings.large} 0;
  h1{
    text-align: center;
    font-size: ${theme.font.sizes.xxlarge};
  }

  @media ${theme.media.lteSmall} {
    h1{
      font-size: ${theme.font.sizes.large};
    }

    h2{
      font-size: ${theme.font.sizes.small};
    }
  }
`}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.medium};
    font-weight: 500;
    padding-bottom: ${theme.spacings.huge};
  `}
`;

export const InfoWrapper = styled.div`
  ${() => css`
  display: flex;

  img{
    position: relative;
    left: -100px;
    z-index: 1;
  }

  @media (max-width: 1200px) {
    img{
      display: none;
    }
    &{
      flex-direction: column;
      align-items: center;
    }
  }

  `}
`;

export const InfoLeft = styled.div`
  ${({ theme }) => css`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  background: ${theme.colors.secondary};
  padding: 0 100px;
  border-radius: ${theme.spacings.small};

  p{
    font-size: ${theme.font.sizes.small};
    font-weight: 500;
    width: 400px;
  }

  @media (max-width: 1200px) {
    &{
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      padding: 10% 0;
    }
    p{
      text-align: center;
    }
  }

  @media ${theme.media.lteSmall} {
    h2{
      font-size: ${theme.font.sizes.medium};
    }

    p{
      font-size: calc(${theme.font.sizes.small} - .4rem);
      width: 80%;
    }

    button{
      font-size: calc(${theme.font.sizes.small} - .4rem);
      padding: 10px 10px;
    }
  }
  `}
`;

export const InfoLeftTitle = styled.h2`
  ${({ theme }) => css`
  font-size: ${theme.font.sizes.medium};
  font-weight: 600;
  color: ${theme.colors.white};
  `}
`;

export const InfoRight = styled.div`
  ${() => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 0;
  left: -130px;

  @media (max-width: 1200px) {
    &{
      left: 0;
      align-items: center;
    }
  }
  `}
`;

export const InfoRightOne = styled.div`
  ${({ theme }) => css`
  background: ${theme.colors.secondary};
  border-radius: 20px;
  margin-bottom: ${theme.spacings.xxlarge};
  padding: ${theme.spacings.small} ${theme.spacings.medium};
  width: 340px;
  text-align: center;

  span{
    color: white;
    padding: 0 10px;
    font-weight: 500;
    font-size: ${theme.font.sizes.small};
  }

  @media (max-width: 1200px) {
    &{
      margin-bottom: ${theme.spacings.xsmall};
      width: 100%;
    }
    &:first-child{
      margin-top: ${theme.spacings.xlarge};
    }
  }
  `}
`;
