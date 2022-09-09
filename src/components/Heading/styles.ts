import styled, { css } from 'styled-components';
export const Wrapper = styled.h1`
${({ theme }) => css`
    font-size: ${theme.font.sizes.xhuge};
    font-weight: 600;
    background: ${theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`}
`;
