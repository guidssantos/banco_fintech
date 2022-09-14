import styled, { css } from 'styled-components';

export const HeaderBg = styled.header`
`;

export const ContainerHeader = styled.div`
    padding-bottom: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const AnimBorder = styled.a`
`;

export const Login = styled.a`
  ${({ theme }) => css`
  padding: 10px 40px;
  background: ${theme.colors.primary};
  border-radius: 5px;
  cursor: pointer;
  `}
`;

export const MenuHeader = styled.div`
    display: inline-flex;

        a{
            margin-right: 1em;
            font-size: 16px;
        }
        @media screen and (max-width: 768px){
            display:none;
        }

`;

export const MenuOne = styled.li``;

export const Logo = styled.div`
${({ theme }) => css`
  font-size: ${theme.font.sizes.medium};
  font-weight: 600;
`}
`;

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform:  translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
    }
`;
