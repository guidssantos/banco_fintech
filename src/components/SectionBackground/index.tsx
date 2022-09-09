import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export type SectionBackgroundProps = {
  children: JSX.Element;
};

export const SectionBackground = ({ children }: SectionBackgroundProps) => {
  return (
    <Styled.Wrapper>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Wrapper>
  );
};
