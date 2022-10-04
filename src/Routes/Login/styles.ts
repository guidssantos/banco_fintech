import styled, { css } from 'styled-components';

export const Background = styled.div`
${() => css`

  display: flex;
  align-items: center;
	background: linear-gradient(-45deg, #121139, #1c1554, #22052d, #1c1554);
	background-size: 400% 400%;
	animation: gradient 10s ease infinite;
  position: relative;
  min-height: 100vh;

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`}
`;

export const Wrapper = styled.div`
${({ theme }) => css`
  max-width: 70rem;
  margin: 0 auto;
  padding: ${theme.spacings.large};
  width: 100%;
`}
`;

export const FormWrapper = styled.form`
${({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255,255,255, 0.9);
  border-radius: ${theme.spacings.small};
  padding: ${theme.spacings.medium} 0;

  img {
    margin-bottom: ${theme.spacings.small};
    border-radius: ${theme.spacings.xsmall}
  };


`}
`;

export const InputOne = styled.input`
${({ theme }) => css`
  padding: ${theme.spacings.small};
  margin-bottom: ${theme.spacings.small};
  background: #FEFEFE;
  width: 70%;
  border-radius: 5px;
  border: 0;
  outline: none;

  @media ${theme.media.lteSmall}{
    width: 90%;
  }
`}
`;

export const InputButton = styled.button`
${({ theme }) => css`
  padding: 1.4rem 8rem;
  background: ${theme.colors.secondary};
  border-radius: 5px;
  border: 0;
  transition: all ease-in-out 300ms;
  color: ${theme.colors.white};

  &:hover{
    transform: scale(105%);
  }
`}
`;

export const LabelOne = styled.label`
${({ theme }) => css`
color: ${theme.colors.secondary};
font-size: ${theme.font.sizes.large};
font-weight: 600;

@media ${theme.media.lteSmall}{
font-size: ${theme.font.sizes.medium};
}
`}
`;

export const RegisterWrapper = styled.div`
${({ theme }) => css`
padding-bottom: ${theme.spacings.small};

span{
  color: ${theme.colors.secondary};
}

a{
  color: #53B3CB;
  transition: all ease-in-out 300ms;
}

a:hover{
  color: #78D6ED;
}

`}
`;
