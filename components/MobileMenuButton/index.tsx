import type MobileMenuButtonProp from './MobileMenuButtonProps';
import Icon from '../Icon';

const MobileMenuButton = ({
  mobileMenuModalOpen,
  setMobileMenuModalOpen,
}: MobileMenuButtonProp) =>
  mobileMenuModalOpen ? (
    <div
      className="flex items-center justify-center h-8 cursor-pointer lg:hidden"
      aria-label="Close mobile menu"
    >
      <Icon icon="close" />
    </div>
  ) : (
    <button
      className="flex items-center justify-center h-8 lg:hidden"
      type="button"
      onClick={() => setMobileMenuModalOpen(true)}
      aria-label="Open mobile menu"
    >
      <Icon icon="open" />
    </button>
  );

export default MobileMenuButton;
