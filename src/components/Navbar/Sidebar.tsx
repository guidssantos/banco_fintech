import React from 'react';
import * as Styled from './styles';

const Sidebar = ({ isOpen, toggle }: Styled.SidebarProps) => {
  return (
    <Styled.SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Styled.Icon onClick={toggle}>
        <Styled.CloseIcon />
      </Styled.Icon>
      <Styled.SidebarWrapper>
        <Styled.SidebarMenu>
          <Styled.SidebarLink onClick={toggle} href="#about_me">
            Sobre Mim
          </Styled.SidebarLink>
          <Styled.SidebarLink onClick={toggle} href="#skills">
            Habilidades
          </Styled.SidebarLink>
          <Styled.SidebarLink onClick={toggle} href="#projects">
            Projetos
          </Styled.SidebarLink>
          <Styled.SidebarLink onClick={toggle} href="#contact">
            Contato
          </Styled.SidebarLink>
        </Styled.SidebarMenu>
      </Styled.SidebarWrapper>
    </Styled.SidebarContainer>
  );
};

export default Sidebar;
