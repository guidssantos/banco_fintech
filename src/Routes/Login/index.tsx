import * as Styled from './styles';
import logo from '../../assets/images/E-Finance.svg';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, loadingAuth } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (email !== '' && password !== '') {
      login(email, password);
    }
  }

  return (
    <Styled.Background>
      <Styled.Wrapper>
        <Styled.FormWrapper onSubmit={handleSubmit}>
          <img src={logo} />
          <Styled.LabelOne>FAÇA SEU LOGIN</Styled.LabelOne>
          <Styled.InputOne
            type="text"
            name="e-mail"
            placeholder="Digite seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Styled.InputOne
            type="password"
            name="senha"
            placeholder="Digite sua melhor senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Styled.WrapperCheck>
            <Link to="/register">Registrar</Link>
          </Styled.WrapperCheck>
          <Styled.InputButton type="submit">
            {loadingAuth ? 'Carregando...' : 'Acessar'}
          </Styled.InputButton>
        </Styled.FormWrapper>
      </Styled.Wrapper>
    </Styled.Background>
  );
};
