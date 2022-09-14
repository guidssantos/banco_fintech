import { CSSProperties } from 'react';
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
      <Styled.SvgContainer>
        <svg
          width="741"
          height="748"
          viewBox="0 0 741 748"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_82_3236)">
            <rect
              x="-440"
              y="300"
              width="881"
              height="881"
              rx="440.5"
              fill="url(#paint0_linear_82_3236)"
              fillOpacity="0.4"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_82_3236"
              x="-740"
              y="0"
              width="1481"
              height="1481"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="150"
                result="effect1_foregroundBlur_82_3236"
              />
            </filter>
            <linearGradient
              id="paint0_linear_82_3236"
              x1="3.53788"
              y1="153.939"
              x2="58.4787"
              y2="1289.55"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#423EE0" />
              <stop offset="1" stopColor="#812DE2" />
            </linearGradient>
          </defs>
        </svg>
      </Styled.SvgContainer>
    </Styled.Wrapper>
  );
};
