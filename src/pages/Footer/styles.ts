import styled, { css } from 'styled-components';
export const Wrapper = styled.footer`
${({ theme }) => css`
border-top: 2px solid ${theme.colors.darkBlue};
background: ${theme.colors.secondary};
padding-top: ${theme.spacings.large};
`}
`;

export const SocialWrapper = styled.div`
${({ theme }) => css`
display: flex;
flex-wrap: wrap;
justify-content: center;
color: ${theme.colors.white};
  svg{
    width: 30px;
    transition: all ease-in-out 300ms;
  }

  a{
    color: white;
    margin-right: 15px;
  }

  a:last-child{
    margin-right: 0;
  }

  svg:hover{
    transform: scale(120%);
  }
`}
`;

export const PagesWrapper = styled.div`
${({ theme }) => css`

display: flex;
justify-content: center;
padding-top: ${theme.spacings.xsmall};

a{
  color: white;
  text-decoration: none;
}

`}
`;

export const Copyright = styled.div`
${({ theme }) => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  p{
    font-size: ${theme.font.sizes.small};
    margin-top: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.small};
  }

  svg{
    width: 10px;
    color: ${theme.colors.white};
  }
`}
`;
