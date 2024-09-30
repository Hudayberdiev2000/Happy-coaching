import NavbarItem from './NavbarItem';

export const Default = {
  args: {
    title: 'Home',
    href: '#',
  },
};

const NavbarItemConfig = {
  title: 'Atoms/NavbarItem',
  component: NavbarItem,
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
};

export default NavbarItemConfig;
