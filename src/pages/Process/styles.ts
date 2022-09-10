import styled, { css } from 'styled-components';
export const Wrapper = styled.div`
${({ theme }) => css`
  padding-top: ${theme.spacings.large};
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    font-size: ${theme.font.sizes.xxlarge};
    width: 600px;
    text-align: center;
    padding-bottom: ${theme.spacings.huge};
  }

  p{
    width: 800px;
    text-align: center;
    padding-bottom: ${theme.spacings.huge};
    font-weight: 500;
  }

@media ${theme.media.lteMedium} {
  p{
    width: 80%;
    font-size: ${theme.font.sizes.small};
  }

  h1{
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

export const Title = styled.h2`
${({ theme }) => css`
font-size: ${theme.font.sizes.medium};
color: ${theme.colors.white};

@media ${theme.media.lteSmall} {
  &{
    font-size: ${theme.font.sizes.small};
  }
}
`}
`;

export const ProcessWrapper = styled.div`
${({ theme }) => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: ${theme.spacings.huge};
`}
`;

export const ProcessOne = styled.div`
${({ theme }) => css`
padding: 20px 0;
width: 160px;
display: flex;
flex-direction: column;
align-items: center;
background: #1C1A50;
margin-top: ${theme.spacings.large};
border: 1px solid #9E59FF;
color: white;
border-radius: 20px;

&:last-child{
  margin-right: 0;
}

svg{
  width: 60px;
  height: 60px;
  margin-bottom: ${theme.spacings.small};
}


`}
`;
