import { Process } from '../Process';
import { Graphic } from '../Graphic';
import { Home } from '../Home';
import * as Styled from './styles';
import { CaseStudy } from '../CaseStudy';

export default function Base() {
  return (
    <Styled.Wrapper>
      <Home />
      <Graphic />
      <Process />
      <CaseStudy />
    </Styled.Wrapper>
  );
}
