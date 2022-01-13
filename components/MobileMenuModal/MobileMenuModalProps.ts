import type { NavigationItem } from 'types';

type MobileMenuModalProps = {
  open: boolean;
  onClose: () => void;
  navigationItems: NavigationItem[];
};

export default MobileMenuModalProps;
