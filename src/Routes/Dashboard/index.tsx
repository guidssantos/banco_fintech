import { Heading } from '../../components/Heading';
import { SectionContainer } from '../../components/SectionContainer';
import * as Styled from './styles';
import Button from 'react-bootstrap/Button';
import cartao from '../../assets/images/cartao.svg';
import { SidebarDashboard } from '../../components/SidebarDashboard';
import { DiReact } from 'react-icons/all';
import person1 from '../../assets/images/person1.jfif';
import person2 from '../../assets/images/person2.jfif';
import person3 from '../../assets/images/person3.jfif';
import person4 from '../../assets/images/person4.jfif';

export const Dashboard = () => {
  return (
    <Styled.Background>
      <SidebarDashboard />
      <SectionContainer>
        <Styled.Wrapper>
          <Heading>Dashboard</Heading>

          <Styled.SectionFinance>
            <Styled.FinanceWrapper>
              <Styled.FinanceOne>
                <Styled.FinanceInfo>R$: 2,000</Styled.FinanceInfo>
                <Styled.FinanceName>Balance</Styled.FinanceName>
              </Styled.FinanceOne>
              <Styled.FinanceOne>
                <Styled.FinanceInfo>R$: 520</Styled.FinanceInfo>
                <Styled.FinanceName>Income</Styled.FinanceName>
              </Styled.FinanceOne>
              <Styled.FinanceOne>
                <Styled.FinanceInfo>R$: 9,000</Styled.FinanceInfo>
                <Styled.FinanceName>Expenses</Styled.FinanceName>
              </Styled.FinanceOne>
              <Styled.FinanceOne>
                <Styled.FinanceInfo>R$: 5000</Styled.FinanceInfo>
                <Styled.FinanceName>Savings</Styled.FinanceName>
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
          </Styled.SectionFinance>
          <Styled.SectionTransaction>
            <Styled.TransactionWrapper className="table-responsive">
              <Heading>Transaction History</Heading>
              <Styled.NamesWrapper className="mb-0 table ">
                <Styled.TransactionThead>
                  <Styled.TransactionTr>
                    <Styled.TransactionTh>Name</Styled.TransactionTh>
                    <Styled.TransactionTh>Type</Styled.TransactionTh>
                    <Styled.TransactionTh>Date</Styled.TransactionTh>
                    <Styled.TransactionTh>Amount</Styled.TransactionTh>
                  </Styled.TransactionTr>
                </Styled.TransactionThead>
                <Styled.TransactionTbody>
                  <Styled.TransactionTr>
                    <Styled.TransactionTd>
                      <div>
                        <h4>John Deo</h4>
                      </div>
                    </Styled.TransactionTd>
                    <Styled.TransactionTd>Food</Styled.TransactionTd>
                    <Styled.TransactionTd>Jun, 2022</Styled.TransactionTd>
                    <Styled.TransactionTd>R$: 2000</Styled.TransactionTd>
                  </Styled.TransactionTr>
                  <Styled.TransactionTr>
                    <Styled.TransactionTd>
                      <div>
                        <h4>John Deo</h4>
                      </div>
                    </Styled.TransactionTd>
                    <Styled.TransactionTd>Food</Styled.TransactionTd>
                    <Styled.TransactionTd>Jun, 2022</Styled.TransactionTd>
                    <Styled.TransactionTd>R$: 2000</Styled.TransactionTd>
                  </Styled.TransactionTr>
                  <Styled.TransactionTr>
                    <Styled.TransactionTd>
                      <div>
                        <h4>John Deo</h4>
                      </div>
                    </Styled.TransactionTd>
                    <Styled.TransactionTd>Food</Styled.TransactionTd>
                    <Styled.TransactionTd>Jun, 2022</Styled.TransactionTd>
                    <Styled.TransactionTd>R$: 2000</Styled.TransactionTd>
                  </Styled.TransactionTr>
                </Styled.TransactionTbody>
              </Styled.NamesWrapper>
            </Styled.TransactionWrapper>
            <Styled.QuickTransaction>
              <Styled.TitleWrapper>
                <Heading>Quick Transaction</Heading>
              </Styled.TitleWrapper>
              <Styled.WrapperPersonQuickTransaction>
                <Styled.PersonQuickTransaction>
                  <img src={person1} />
                  <p>Juliana Freitas</p>
                </Styled.PersonQuickTransaction>
                <Styled.PersonQuickTransaction>
                  <img src={person2} />
                  <p>Brian Oliveira</p>
                </Styled.PersonQuickTransaction>
                <Styled.PersonQuickTransaction>
                  <img src={person3} />
                  <p>Carolina Almeida</p>
                </Styled.PersonQuickTransaction>
                <Styled.PersonQuickTransaction>
                  <img src={person4} />
                  <p>Antonio José</p>
                </Styled.PersonQuickTransaction>
              </Styled.WrapperPersonQuickTransaction>
              <Styled.InputWrapper>
                <input
                  type="number"
                  min="1"
                  step="0.01"
                  placeholder="R$ Amount"
                />
                <Button>Send</Button>
              </Styled.InputWrapper>
            </Styled.QuickTransaction>
          </Styled.SectionTransaction>
        </Styled.Wrapper>
      </SectionContainer>
    </Styled.Background>
  );
};
