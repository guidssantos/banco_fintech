import styled, { css } from 'styled-components';
export const Wrapper = styled.div`
${({ theme }) => css`
  background: ${theme.colors.secondary};
  display: flex;
  align-items: center;
`}
`;
