import { Scroll, Timer } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <span>Timerr.</span>
      <nav>
        <NavLink
          to="/"
          title="Timer"
        >
          <Timer size={24} />
        </NavLink>
        <NavLink
          to="/history"
          title="Histórico"
        >
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
