import { Process } from '../Process';
import { Graphic } from '../Graphic';
import { Home } from '../Home';
import * as Styled from './styles';
import { CaseStudy } from '../CaseStudy';
import { GraphicTwo } from '../GraphicTwo';
import { Footer } from '../Footer';

export default function Base() {
  return (
    <Styled.Wrapper>
      <Home />
      <Graphic />
      <Process />
      <CaseStudy />
      <GraphicTwo />
      <Footer />
    </Styled.Wrapper>
  );
}
