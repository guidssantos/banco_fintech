import * as Styled from './styles';
import { FaBars } from 'react-icons/fa';

export type MenuProps = { toggle?: React.MouseEventHandler<HTMLDivElement> };
export const Menu = ({ toggle }: MenuProps) => {
  return (
    <Styled.HeaderBg>
      <Styled.ContainerHeader>
        <Styled.Logo>
          <Styled.AnimBorder href="/">E-Finance</Styled.AnimBorder>
        </Styled.Logo>
        <Styled.MobileIcon onClick={toggle}>
          <FaBars />
        </Styled.MobileIcon>
        <Styled.MenuHeader>
          <Styled.MenuOne>
            <Styled.Login className="nav-link" href="#about_me">
              Login
            </Styled.Login>
          </Styled.MenuOne>
        </Styled.MenuHeader>
      </Styled.ContainerHeader>
    </Styled.HeaderBg>
  );
};
