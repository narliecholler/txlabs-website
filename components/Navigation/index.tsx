import type NavigationProps from './NavigationProps';
import NavigationItem from '../NavigationItem';

const Navigation = ({ items }: NavigationProps) => (
  <nav>
    <ul className="flex items-center gap-8">
      {items.map((item) => (
        <NavigationItem key={item.title} item={item} />
      ))}
    </ul>
  </nav>
);

export default Navigation;
