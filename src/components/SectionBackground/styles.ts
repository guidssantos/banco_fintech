import styled, { css } from 'styled-components';
export const Wrapper = styled.div`
${() => css`
  display: flex;
  align-items: center;
	background: linear-gradient(-45deg, #121139, #1c1554, #22052d, #1c1554);
	background-size: 400% 400%;
	animation: gradient 10s ease infinite;
  position: relative;


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

export const SvgContainer = styled.div`
svg{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 80%;
  animation: moving 10s ease infinite;

  @keyframes moving {
    0% {
		width: 50%;

	}
	50% {
		width: 90%;
	}
	100% {
		width: 50%;
	}
  }
}`;
