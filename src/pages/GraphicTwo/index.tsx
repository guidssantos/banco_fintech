import { Heading } from '../../components/Heading';
import { TextComponent } from '../../components/TextComponent';
import { SectionBackground } from '../../components/SectionBackground';
import mac from '../../assets/images/mac.svg';
import * as Styled from './styles';

export const GraphicTwo = () => {
  return (
    <SectionBackground style={{ minHeight: '100vh' }}>
      <Styled.Wrapper>
        <Heading>Coruma Finance</Heading>
        <TextComponent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia quod
          voluptatem, optio illum non recusandae laborum amet nulla cum? Ipsum,
          nisi nesciunt! Cumque numquam fugiat, magnam eos explicabo officia
        </TextComponent>
        <img src={mac} />
      </Styled.Wrapper>
    </SectionBackground>
  );
};
