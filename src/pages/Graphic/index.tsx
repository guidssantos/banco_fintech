import { Heading } from '../../components/Heading';
import { TextComponent } from '../../components/TextComponent';
import { ImageContainer } from '../Home/styles';
import grapich from '../../assets/images/grapich.svg';
import * as Styled from './styles';
import { SectionContainer } from '../../components/SectionContainer';

export const Graphic = () => {
  return (
    <SectionContainer>
      <Styled.Wrapper>
        <Heading>Consulting For Startups in Fintech</Heading>
        <TextComponent>
          Our Team consists of proven experts from finance, tech and science.
          This mix makes it possible for our team to deliver the best results to
          all our clients.
        </TextComponent>
        <img src={grapich} />
      </Styled.Wrapper>
    </SectionContainer>
  );
};
