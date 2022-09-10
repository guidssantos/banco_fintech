import * as Styled from './styles';
import { Copyright, Facebook } from '@styled-icons/material-outlined';
import { InstagramWithCircle } from '@styled-icons/entypo-social/InstagramWithCircle';
import { TwitterWithCircle } from '@styled-icons/entypo-social/TwitterWithCircle';
import { TextComponent } from '../../components/TextComponent';

export const Footer = () => {
  return (
    <Styled.Wrapper>
      <Styled.SocialWrapper>
        <a href="#home">
          <Facebook />
        </a>
        <a href="#home">
          <InstagramWithCircle />
        </a>
        <a href="#home">
          <TwitterWithCircle />
        </a>
      </Styled.SocialWrapper>
      <Styled.PagesWrapper>
        <a href="#home">Home</a>
      </Styled.PagesWrapper>
      <Styled.Copyright>
        <Copyright />
        <TextComponent>Todos os direitos reservados</TextComponent>
      </Styled.Copyright>
    </Styled.Wrapper>
  );
};
