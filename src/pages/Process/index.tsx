import { TextComponent } from '../../components/TextComponent';
import { Heading } from '../../components/Heading';
import { SectionBackground } from '../../components/SectionBackground';

import { Analytics } from '@styled-icons/material-outlined';
import { TrendingUp } from '@styled-icons/material-outlined/TrendingUp';
import { Payments } from '@styled-icons/material-outlined/Payments';
import * as Styled from './styles';

export type ProcessProps = { title?: string };
export const Process = () => {
  return (
    <SectionBackground>
      <>
        <Styled.Wrapper>
          <Heading>Delivering value in every step of production</Heading>
          <Styled.Title>The Process</Styled.Title>
          <TextComponent>
            Strategic phrases we run through with every client make it possible
            to implement highly efficinet processes, even in high pace startups
            that like to scale as fast as possible.
          </TextComponent>
        </Styled.Wrapper>
        <Styled.ProcessWrapper>
          <Styled.ProcessOne>
            <Analytics />
            Analysis
          </Styled.ProcessOne>
          <Styled.ProcessOne>
            <TrendingUp /> Growth Phase
          </Styled.ProcessOne>
          <Styled.ProcessOne>
            <Payments />
            <span>Profit</span>
          </Styled.ProcessOne>
        </Styled.ProcessWrapper>
      </>
    </SectionBackground>
  );
};
