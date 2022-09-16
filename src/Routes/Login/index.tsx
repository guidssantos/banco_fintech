import * as Styled from './styles';
import logo from '../../assets/images/E-Finance.svg';
import { Link } from 'react-router-dom';

export type LoginProps = { value?: string };
export const Login = ({ value }: LoginProps) => {
  return (
    <Styled.Background>
      <Styled.Wrapper>
        <Styled.FormWrapper>
          <img src={logo} />
          <Styled.LabelOne>FAÇA SEU LOGIN</Styled.LabelOne>
          <Styled.InputOne
            type="text"
            name="e-mail"
            placeholder="Digite seu melhor e-mail"
            value={value}
          />
          <Styled.InputOne
            type="password"
            name="senha"
            placeholder="Digite sua melhor senha"
            value={value}
          />
          <Styled.WrapperCheck>
            <span>
              <input type="checkbox" />
              Remember me
            </span>
            <a>Forgot Password</a>
          </Styled.WrapperCheck>
          <Styled.InputButton type="submit" name="Login" value="LOGIN" />
          <Link to="dashboard">teste</Link>
        </Styled.FormWrapper>
      </Styled.Wrapper>
    </Styled.Background>
  );
};
