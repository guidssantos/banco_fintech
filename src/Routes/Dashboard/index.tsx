import { AuthContext } from '../../contexts/auth';
import { useContext } from 'react';
import { Heading } from '../../components/Heading';
import { SectionContainer } from '../../components/SectionContainer';
import * as Styled from './styles';
import Button from 'react-bootstrap/Button';
import cartao from '../../assets/images/cartao.svg';

export const Dashboard = () => {
  const { logout } = useContext(AuthContext);

  return (
    <Styled.Background>
      <SectionContainer>
        <Styled.Wrapper>
          <Heading>Dashboard</Heading>
          <div>
            <Styled.FinanceWrapper>
              <Styled.FinanceOne>
                <Styled.FinanceInfo>R$: 2,000</Styled.FinanceInfo>
                <Styled.FinanceName>Balance</Styled.FinanceName>
              </Styled.FinanceOne>
              <Styled.FinanceOne>
                <Styled.FinanceInfo>R$: 520</Styled.FinanceInfo>
                <Styled.FinanceName>Renda</Styled.FinanceName>
              </Styled.FinanceOne>
              <Styled.FinanceOne>
                <Styled.FinanceInfo>R$: 9,000</Styled.FinanceInfo>
                <Styled.FinanceName>Despesas</Styled.FinanceName>
              </Styled.FinanceOne>
              <Styled.FinanceOne>
                <Styled.FinanceInfo>R$: 5000</Styled.FinanceInfo>
                <Styled.FinanceName>Poupança</Styled.FinanceName>
              </Styled.FinanceOne>
            </Styled.FinanceWrapper>
            <Styled.CardWrapper>
              <Styled.TitleWrapper>
                <Heading>My card</Heading>
                <Button size="lg" className="ms-5">
                  Add Card
                </Button>
              </Styled.TitleWrapper>
              <Styled.ImgBackground>
                <img className="mt-3" src={cartao} />
              </Styled.ImgBackground>
            </Styled.CardWrapper>
          </div>
          <div>
            <Styled.TransactionWrapper>
              <Styled.TitleWrapper>Transaction History</Styled.TitleWrapper>
              <Styled.NamesWrapper>
                <span>Name</span>
                <span>Type</span>
                <span>Date</span>
                <span>Amount</span>
              </Styled.NamesWrapper>
            </Styled.TransactionWrapper>
          </div>
          <Button onClick={() => logout()}>teste</Button>
        </Styled.Wrapper>
      </SectionContainer>
    </Styled.Background>
  );
};
