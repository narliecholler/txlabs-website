import type MobileMenuNavigationProps from './MobileMenuNavigationProps';
import MobileMenuNavigationItem from '../MobileMenuNavigationItem';

const MobileMenuNavigation = ({ items }: MobileMenuNavigationProps) => (
  <ul className="space-y-10">
    {items.map((item) => (
      <MobileMenuNavigationItem key={item.title} item={item} />
    ))}
  </ul>
);

export default MobileMenuNavigation;
