import styled, { css } from 'styled-components';
export const Wrapper = styled.div`
${({ theme }) => css`
  h1{
    text-align: center;
    font-size: ${theme.font.sizes.xxlarge};
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
  ${({ theme }) => css`
  display: flex;

  img{
    position: relative;
    left: -100px;
    z-index: 1;
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
  ${({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 0;
  left: -130px;
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
  `}
`;
