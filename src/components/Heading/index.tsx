import * as Styled from './styles';

export type HeadingProps = { children?: string };
export const Heading = ({ children }: HeadingProps) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};
