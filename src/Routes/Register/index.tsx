import * as Styled from './styles';
import logo from '../../assets/images/E-Finance.svg';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { register, loadingAuth } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (email !== '' && password !== '' && name !== '') {
      register(email, password, name);
    }
  }

  return (
    <Styled.Background>
      <Styled.Wrapper>
        <Styled.FormWrapper onSubmit={handleSubmit}>
          <img src={logo} />
          <Styled.LabelOne>FAÇA SEU REGISTRO</Styled.LabelOne>
          <Styled.InputOne
            type="text"
            name="e-mail"
            placeholder="Digite seu Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            <Link to="/login">Já tem uma conta?</Link>
          </Styled.WrapperCheck>
          <Styled.InputButton type="submit">
            {loadingAuth ? 'Carregando...' : 'Cadastrar'}
          </Styled.InputButton>
        </Styled.FormWrapper>
      </Styled.Wrapper>
    </Styled.Background>
  );
};
