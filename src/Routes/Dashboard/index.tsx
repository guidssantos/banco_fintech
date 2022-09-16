import { DashboardProps } from 'components/Heading/styles';
import { Heading } from '../../components/Heading';
import { SectionContainer } from '../../components/SectionContainer';
import * as Styled from './styles';

export const Dashboard = () => {
  return (
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
              <Styled.FinanceInfo>R$: 50</Styled.FinanceInfo>
              <Styled.FinanceName>Poupança</Styled.FinanceName>
            </Styled.FinanceOne>
          </Styled.FinanceWrapper>
          <Styled.CardWrapper>
            <Styled.TitleWrapper>
              <Heading>My card</Heading>
              <Styled.ButtonCard>Add Card</Styled.ButtonCard>
            </Styled.TitleWrapper>
          </Styled.CardWrapper>
        </div>
      </Styled.Wrapper>
    </SectionContainer>
  );
};
