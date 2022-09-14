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
            Abra sua conta
          </Styled.SidebarLink>
          <Styled.SidebarLink onClick={toggle} href="#skills">
            Cartão de credito
          </Styled.SidebarLink>
          <Styled.SidebarLink onClick={toggle} href="#projects">
            Empréstimo
          </Styled.SidebarLink>
          <Styled.SidebarLink onClick={toggle} href="#contact">
            Login
          </Styled.SidebarLink>
        </Styled.SidebarMenu>
      </Styled.SidebarWrapper>
    </Styled.SidebarContainer>
  );
};

export default Sidebar;
