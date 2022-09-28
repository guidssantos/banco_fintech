import styled, { css } from 'styled-components';

export const Background = styled.section`
${({ theme }) => css`
  min-height: 100vh;
	background: linear-gradient(-45deg, #121139, #1c1554, #22052d, #1c1554);
	background-size: 400% 400%;
	animation: gradient 10s ease infinite;
  h1{
    font-weight: 800;
  }

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
padding-top: ${theme.spacings.large};
  h1{
    font-size: 20px;
  }
`}
`;

export const SectionFinance = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const FinanceWrapper = styled.div`
${({ theme }) => css`
  display: flex;
  flex-wrap: wrap;
  padding-top: ${theme.spacings.huge};
`}
`;

export const FinanceOne = styled.li`
${({ theme }) => css`
  margin-right: 50px;
  color: ${theme.colors.white};

  &:last-child{
    margin-right: 0;
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
display: flex;
flex-wrap: wrap;
flex-direction: column;
margin-top: ${theme.spacings.large};


`}
`;

export const ImgBackground = styled.article`
${({ theme }) => css`
box-shadow: 50px 5px 0px -20px rgba(43,31,114, 0.5);
  border-radius: 40px;

img {
  width: 100%;
  border-radius: 15px;
}
`}
`;

export const SectionTransaction = styled.section`
${({ theme }) => css`
margin-top: 10rem;
display: flex;
justify-content: space-between;
align-items: center;
`}
`;

export const TitleWrapper = styled.div`
${({ theme }) => css`
padding-bottom: ${theme.spacings.large};
display: flex;
justify-content: space-between;
`}
`;

export const TransactionWrapper = styled.article`
${({ theme }) => css`
flex-wrap: wrap;
border-radius: 10px;
width: 70%;
`}
`;

export const NamesWrapper = styled.table`
${({ theme }) => css`
color: white;
margin-top: ${theme.spacings.medium};

`}
`;

export const TransactionThead = styled.thead`

`;

export const TransactionTr = styled.tr`


`;

export const TransactionTh = styled.th`
border: 0;

`;

export const TransactionTbody = styled.tbody`
border: 0;



`;
export const TransactionTd = styled.td`
border: 0;


`;

export const QuickTransaction = styled.article`
display: flex;
justify-content: center;
width: 26%;
flex-direction: column;
align-items: center;
`;

export const PersonQuickTransaction = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-right: 2rem;
color: white;

&:last-child{
  margin-right: 0;
}

svg{
  width: 50px;
  height: 50px;
}

p{
  margin: 0;
}
`;

export const WrapperPersonQuickTransaction = styled.div`
display: flex;
`;
