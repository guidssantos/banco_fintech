import styled, { css } from 'styled-components';

export type DashboardProps = { small?: boolean };

export const Wrapper = styled.h1<DashboardProps>`
${({ theme }) => css`
    font-size: ${theme.font.sizes.xhuge};
    font-weight: 600;
    background: ${theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`}
`;
