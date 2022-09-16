import * as Styled from './styles';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
            <Link to="/login">Login</Link>
          </Styled.MenuOne>
        </Styled.MenuHeader>
      </Styled.ContainerHeader>
    </Styled.HeaderBg>
  );
};
