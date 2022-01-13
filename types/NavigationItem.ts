import type NavigationItemChild from './NavigationItemChild';

type NavigationItem = {
  title: string;
  children: NavigationItemChild[];
};

export default NavigationItem;
