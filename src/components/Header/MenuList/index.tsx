import MenuItem from './MenuItem';

import { MenuListStyled, MenuIndicator } from './styles';

export default function MenuList() {
  return (
    <MenuListStyled>
      <MenuItem label="Tênis" />
      <MenuItem label="Novidades" />
      <MenuItem label="Masculino" />
      <MenuItem label="Feminino" />
      <MenuItem label="Marcas" />
      <MenuItem label="Outlet" />

      <MenuIndicator>
        <div className="arrow" />
      </MenuIndicator>
    </MenuListStyled>
  );
}
