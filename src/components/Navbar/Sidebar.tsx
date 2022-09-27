import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styles';

const Sidebar = ({ isOpen, toggle }: Styled.SidebarProps) => {
  return (
    <Styled.SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Styled.Icon onClick={toggle}>
        <Styled.CloseIcon />
      </Styled.Icon>
      <Styled.SidebarWrapper>
        <Styled.SidebarMenu>
          <Styled.SidebarLink onClick={toggle} href="#">
            Abra sua conta
          </Styled.SidebarLink>
          <Styled.SidebarLink onClick={toggle} href="#">
            Cartão de credito
          </Styled.SidebarLink>
          <Styled.SidebarLink onClick={toggle} href="#">
            Empréstimo
          </Styled.SidebarLink>
          <Link onClick={toggle} to="/login">
            Login
          </Link>
        </Styled.SidebarMenu>
      </Styled.SidebarWrapper>
    </Styled.SidebarContainer>
  );
};

export default Sidebar;
