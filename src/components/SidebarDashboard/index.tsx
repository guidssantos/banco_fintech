import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Container, Content, ClosedSideBar, OpenSideBar } from './styles';

import {
  IoNotificationsSharp,
  MdSettings,
  BsArrowRight,
  BsArrowLeft,
  DiReact,
  RiLogoutCircleRLine,
} from 'react-icons/all';

import logoImg from '../../assets/images/E-Finance.svg';
import userImg from '../../assets/images/E-Finance.svg';

export function SidebarDashboard() {
  const [sideBar, setSideBar] = useState(false);

  const { logout } = useContext(AuthContext);

  function handleChangeSideBar() {
    setSideBar((prevState) => !prevState);
  }
  return (
    <Container>
      <Content>
        {!sideBar ? (
          <ClosedSideBar>
            <nav>
              <button onClick={handleChangeSideBar}>
                <BsArrowRight />
              </button>

              <img src={logoImg} alt="Eu" />

              {/* Links principais do app */}
              <ul>
                <a href="/" title="Dashboard">
                  <DiReact />
                </a>
                <a href="/" title="Transaction">
                  <DiReact />
                </a>
                <a href="/" title="Payment">
                  <DiReact />
                </a>
                <a href="/" title="Card">
                  <DiReact />
                </a>
              </ul>
            </nav>
            <div>
              {/* Icones que pode não ser tão principais no app */}
              <ul>
                {/* <a href="/" title="Notificações">
                  <IoNotificationsSharp />
                </a> */}
                <a href="/" title="Configurações">
                  <MdSettings />
                </a>
                <a onClick={() => logout()} title="Sair da conta">
                  <RiLogoutCircleRLine />
                </a>
              </ul>
            </div>
          </ClosedSideBar>
        ) : (
          <OpenSideBar>
            <section>
              <nav>
                <span>
                  <button onClick={handleChangeSideBar}>
                    <BsArrowLeft />
                  </button>
                </span>
                <div>
                  <img src={logoImg} alt="Eu" />
                  <h1>E-Finance</h1>
                </div>

                {/* Icones principais do app */}
                <ul>
                  <a href="/" title="Dashboard">
                    <DiReact />
                    <p>Dashboard</p>
                  </a>
                  <a href="/" title="Transaction">
                    <DiReact />
                    <p>Transaction</p>
                  </a>
                  <a href="/" title="Payment">
                    <DiReact />
                    <p>Payment</p>
                  </a>
                  <a href="/" title="Card">
                    <DiReact />
                    <p>Card</p>
                  </a>
                </ul>
              </nav>
              <div>
                {/* Icones que pode não ser tão principais no app */}
                <ul>
                  {/* <a href="/">
                    <IoNotificationsSharp />
                    <p>Notificações</p>
                  </a> */}
                  <a href="/">
                    <MdSettings />
                    <p>Configurações</p>
                  </a>
                  <a onClick={() => logout()}>
                    <RiLogoutCircleRLine />
                    <p> Sair da conta </p>
                  </a>
                </ul>

                <span>
                  {/* <img src={userImg} alt="Cliente" /> */}
                  <p>Guilherme dos Santos</p>
                </span>
              </div>
            </section>
            <aside onClick={handleChangeSideBar} />
          </OpenSideBar>
        )}
      </Content>
    </Container>
  );
}
