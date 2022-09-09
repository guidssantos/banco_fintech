import * as Styled from './styles';

export type SectionContainerProps = {
  children: JSX.Element;
};

export const SectionContainer = ({ children }: SectionContainerProps) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};
