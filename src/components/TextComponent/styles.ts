import styled, { css } from 'styled-components';
export const Wrapper = styled.p`
${({ theme }) => css`
  font-size: ${theme.font.sizes.medium};
  color: ${theme.colors.white};
`}
`;
