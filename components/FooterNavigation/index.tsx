import type FooterNavigationProps from './FooterNavigationProps';
import FooterNavigationItem from '../FooterNavigationItem';

const FooterNavigation = ({ items }: FooterNavigationProps) => (
  <ul className="footerRow relative z-[99] flex lg:flex-wrap items-start gap-16 space-between">
    {items.map((item) => (
      <FooterNavigationItem key={item.title} item={item} />
    ))}
  </ul>
);

export default FooterNavigation;
