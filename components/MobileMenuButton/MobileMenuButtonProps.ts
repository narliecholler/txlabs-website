import type { Dispatch, SetStateAction } from 'react';

type MobileMenuButtonProps = {
  mobileMenuModalOpen: boolean;
  setMobileMenuModalOpen: Dispatch<SetStateAction<boolean>>;
};

export default MobileMenuButtonProps;
