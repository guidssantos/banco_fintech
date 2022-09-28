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

  @media ${theme.media.lteMedium}{
    text-align: center;
  }
`}
`;

export const SectionFinance = styled.section`
${({ theme }) => css`

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media ${theme.media.lteMedium}{
    flex-direction: column;
  }
    `}
`;

export const FinanceWrapper = styled.div`
${({ theme }) => css`
  display: flex;
  flex-wrap: wrap;
  padding-top: ${theme.spacings.huge};
  padding-right: 30rem;

  @media ${theme.media.lteMedium}{
    padding-right: 0;
  }

  @media ${theme.media.lteSmall}{
  padding-top: ${theme.spacings.medium};
  flex-direction: column;
  }
`}
`;

export const FinanceOne = styled.li`
${({ theme }) => css`
  margin-right: 50px;
  color: ${theme.colors.white};


  &:last-child{
    margin-right: 0;
  }

  @media ${theme.media.lteSmall}{
    margin-right: 0;
    margin-top: 10px;

    &:first-child{
      margin-top: 0;
    }

    &:last-child{
      margin-bottom: 10px;
    }
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
flex-wrap: wrap;
justify-content: space-between;
align-items: flex-start;

@media ${theme.media.lteMedium}{
  flex-direction: column;
    align-items: center;
  }

@media ${theme.media.lteSmall}{
  margin-top: 5rem;
}
`}
`;

export const TitleWrapper = styled.div`
${({ theme }) => css`
padding-bottom: ${theme.spacings.large};
display: flex;
justify-content: space-between;

@media ${theme.media.lteSmall}{
  padding-bottom: ${theme.spacings.small};
}
`}
`;

export const TransactionWrapper = styled.article`
${({ theme }) => css`
flex-wrap: wrap;
border-radius: 10px;
width: 70%;

@media ${theme.media.lteMedium}{
  padding-bottom: 50px;
}

@media ${theme.media.lteSmall}{
  width: 100%;
  padding-bottom: 2rem;

  .table>tbody{
    vertical-align: middle;
  }
}
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
${({ theme }) => css`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 340px;

@media ${theme.media.lteSmall}{
width: 100%;
}
`}
`;

export const PersonQuickTransaction = styled.div`
${({ theme }) => css`
display: flex;
flex-direction: column;
align-items: center;
margin-right: 2rem;
color: white;

&:last-child{
  margin-right: 0;
}

img{
  width: 50px;
  height: 50px;
  border-radius: 50px;
}

p{
  margin: 0;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  padding-top: 5px;
}

@media ${theme.media.lteMedium}{


}
`}
`;

export const WrapperPersonQuickTransaction = styled.div`
display: flex;

`;

export const InputWrapper = styled.div`
${({ theme }) => css`
padding-top: 20px;

input{
  margin-right: 20px;
  padding: 8px;
}

button{
  padding: 10px 25px;
  font-size: 16px;
  border: 0;
}
@media ${theme.media.lteSmall}{
  display: flex;
  flex-direction: column;
  input{
    margin-right: 0;
    margin-bottom: 10px;
  }
}

`}
`;
