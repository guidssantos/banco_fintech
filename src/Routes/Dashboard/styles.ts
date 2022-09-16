import styled, { css } from 'styled-components';
export const Wrapper = styled.div`
${({ theme }) => css`
  h1{
    font-size: 20px;
  }

  div{
    display: -webkit-box;
  }
`}
`;

export const FinanceWrapper = styled.ul`
${({ theme }) => css`
  display: flex;
  padding-top: ${theme.spacings.huge};
  width: 80%;
`}
`;

export const FinanceOne = styled.li`
${({ theme }) => css`
  padding-right: 5%;

  &:last-child{
    padding-right: 0;
  }
`}
`;

export const FinanceInfo = styled.h1`
${({ theme }) => css`

`}
`;

export const FinanceName = styled.span`
${({ theme }) => css`

`}
`;

export const CardWrapper = styled.div`
${({ theme }) => css`
`}
`;

export const TitleWrapper = styled.div`
${({ theme }) => css`
`}
`;

export const ButtonCard = styled.button`
${({ theme }) => css`
  padding: 20px;
`}
`;
