import styled, { css } from 'styled-components';
export const Wrapper = styled.div`
${({ theme }) => css`
  background: ${theme.colors.secondary};
  min-height: 100vh;
  display: flex;
  align-items: center;
`}
`;
