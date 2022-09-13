import { CSSProperties, useState } from 'react';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export type SectionBackgroundProps = {
  children: JSX.Element;
  style?: CSSProperties;
};

export const SectionBackground = ({
  children,
  style,
}: SectionBackgroundProps) => {
  return (
    <Styled.Wrapper style={style}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Wrapper>
  );
};
