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
&:hover{
  color: white;
}
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

export const MenuOne = styled.li`
 ${({ theme }) => css`

 a{
  padding: 10px 50px;
  background: ${theme.colors.primary};
  color: white;
  border-radius: 5px;
  cursor: pointer;
 }

 transition: all ease-in-out 300ms;

 &:hover{
  transform: scale(105%);
 }

 &:active{
  transform: scale(95%);
 }

 `}
`;

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
