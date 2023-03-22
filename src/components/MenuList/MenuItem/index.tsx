import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import { MenuContent, MenuTrigger } from './styles';

interface MenuItemProps {
  label: string
}

export default function MenuItem({ label }: MenuItemProps) {
  return (
    <NavigationMenu.Item>
      <MenuTrigger>
        {label}
      </MenuTrigger>
      <MenuContent />
    </NavigationMenu.Item>
  );
}
