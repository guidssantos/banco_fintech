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
${() => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255,255,255, 0.9);
  border-radius: 15px;
  padding: 5% 0;

  img {
    margin-bottom: 20px;
    border-radius: 15px
  };


`}
`;

export const InputOne = styled.input`
${({ theme }) => css`
  padding: ${theme.spacings.small};
  margin-bottom: ${theme.spacings.small};
  background: #FEFEFE;
  z-index: 2;
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
  padding: ${theme.spacings.small};
  background: ${theme.colors.secondary};
  z-index: 2;
  width: 25%;
  border-radius: 5px;
  border: 0;
  color: white;
  cursor: pointer;

  @media ${theme.media.lteMedium}{
  padding: ${theme.spacings.small} 80px;
  display: flex;
  justify-content: center;
  }
`}
`;

export const LabelOne = styled.label`
${({ theme }) => css`
z-index: 2;
color: ${theme.colors.secondary};
font-size: ${theme.font.sizes.large};
font-weight: 600;
padding-bottom: ${theme.spacings.small};

@media ${theme.media.lteSmall}{
font-size: ${theme.font.sizes.medium};
}
`}
`;

export const WrapperCheck = styled.div`
${({ theme }) => css`
display: flex;
justify-content: center;
width: 100%;
z-index: 2;
padding-bottom: 50px;

    span:first-child{
      margin-right: 15%;
    }

    a, span{
      color:  ${theme.colors.secondary};
    }

@media ${theme.media.lteSmall}{
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  padding-bottom: 20px;

  span:first-child{
    margin-right: 0;
  }

}
`}
`;
