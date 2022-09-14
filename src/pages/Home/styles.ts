import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
${({ theme }) => css`
display: flex;
align-items: center;
`}`;

export const TextContainer = styled.div`
${({ theme }) => css`
  width: 100%;

  h1, p{
    width: 550px;
    margin: 0;
  }

  h1{
    line-height: 1;
    margin-bottom: ${theme.spacings.small};
  }

  p{
    font-size: ${theme.font.sizes.small};
  }

@media ${theme.media.lteMedium} {
  &{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  h1{
    width: 100%;
  }

  p{
    width: 80%;
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
`}`;

export const Button = styled.button`
${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    padding: 12px 50px;
    border: 2px solid #9E59FF;
    border-radius: 5px;
    background-color: transparent;
    color: ${theme.colors.white};
    cursor: pointer;
    position: relative;
    font-family: ${theme.font.family.default};
    font-weight: 600;
    font-size: ${theme.font.sizes.small};
    letter-spacing: 0.05em;
    background: linear-gradient(to right, #9E59FF, #423EE0);
    overflow: hidden;
    z-index: 2;

    &::before,
    &::after{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    &::before{
        content: "";
        background: ${theme.colors.secondary};
        width: 120%;
        left: -10%;
        transform: skew(30deg);
        transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
    }

    &:hover::before{
        transform: translate3d(100%, 0, 0);
    }

    &:active{
        transform: scale(0.95);

    }
            span{
                position: relative;
                z-index: 10;
                transition: color 0.4s;
                display: inline-flex;
                align-items: center;
            }
`}`;

export const ImageContainer = styled.div`
${({ theme }) => css`
img {
  width: 100%;
}

@media ${theme.media.lteMedium} {
  img{
    display: none;
  }
}
`}`;

export const LogoWrapper = styled.div`
${({ theme }) => css`
    padding-top: ${theme.spacings.xhuge};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    svg{
      color: #FFFFFF;
    }

    @media ${theme.media.lteSmall} {
      flex-direction: column;
      align-content: center;
    }

    svg{
      position: relative;
      margin-bottom: ${theme.spacings.small}
    }

    svg:last-child{
      margin-bottom: 0;
    }
`}
`;
