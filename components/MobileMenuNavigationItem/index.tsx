import type MobileMenuNavigationItemProps from './MobileMenuNavigationItemProps';
import Icon from '../Icon';

const MobileMenuNavigationItem = ({ item }: MobileMenuNavigationItemProps) => (
  <li className="space-y-5">
    <h2 className="text-4xl">{item.title}</h2>
    <ul className="space-y-4">
      {item.children.map((child) => (
        <li key={child.title}>
          <a
            className="flex items-center gap-5 focus:outline-none"
            href={child.href}
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center justify-center w-7">
              <Icon icon={child.icon} />
            </div>
            <span className="text-xl">{child.title}</span>
          </a>
        </li>
      ))}
    </ul>
  </li>
);

export default MobileMenuNavigationItem;
