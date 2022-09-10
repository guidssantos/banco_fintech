import { TextComponent } from '../../components/TextComponent';
import { Button } from '../Home/styles';
import { Heading } from '../../components/Heading';
import { SectionContainer } from '../../components/SectionContainer';
import phone from '../../assets/images/phone.svg';
import * as Styled from './styles';

export const CaseStudy = () => {
  return (
    <SectionContainer>
      <>
        <Styled.Wrapper>
          <Heading>Case Study</Heading>
          <Styled.Title>Some results from our clients</Styled.Title>
          <Styled.InfoWrapper>
            <Styled.InfoLeft>
              <Styled.InfoLeftTitle>Coruma Finance</Styled.InfoLeftTitle>
              <TextComponent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                delectus, adipisci obcaecati ut quidem alias architecto magni.
                Ea libero quasi totam aliquid accusantium vel atque optio
              </TextComponent>
              <Button>
                <span>READ MORE ABOUT THIS CLIENT</span>
              </Button>
            </Styled.InfoLeft>
            <img src={phone} />
            <Styled.InfoRight>
              <Styled.InfoRightOne>
                <span>Accquired 8 long time customers</span>
              </Styled.InfoRightOne>
              <Styled.InfoRightOne>
                <span>300% Growth in first year</span>
              </Styled.InfoRightOne>
              <Styled.InfoRightOne>
                <span>Hired 24 talented developers</span>
              </Styled.InfoRightOne>
            </Styled.InfoRight>
          </Styled.InfoWrapper>
        </Styled.Wrapper>
      </>
    </SectionContainer>
  );
};
