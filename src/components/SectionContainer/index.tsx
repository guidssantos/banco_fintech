import { CSSProperties } from 'react';
import * as Styled from './styles';

export type SectionContainerProps = {
  children: JSX.Element;
  style?: CSSProperties;
};

export const SectionContainer = ({
  children,
  style,
}: SectionContainerProps) => {
  return <Styled.Wrapper style={style}>{children} </Styled.Wrapper>;
};
