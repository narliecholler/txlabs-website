import { Fragment } from 'react'
import { Transition, Dialog } from '@headlessui/react';
import type MobileMenuModalProps from './MobileMenuModalProps';
import MobileMenuNavigation from '../MobileMenuNavigation';
import MeshLogo from '../MeshLogo';

const MobileMenuModal = ({
  open,
  onClose,
  navigationItems,
}: MobileMenuModalProps) => (
  <Transition
    show={open}
    as={Fragment}
  >
    <Dialog
      open={open}
      onClose={onClose}
      className="fixed bottom-0 left-0 right-0 z-10 overflow-y-auto bg-black top-[4.25rem]"
    >
      <Transition.Child
        enter="transition ease-in-out duration-1000 transform"
        enterFrom="-translate-y-full"
        enterTo="translate-y-0"
        leave="transition ease-in-out duration-600 transform"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-full"
      >
        <div className="container py-12 space-y-12">
          <MobileMenuNavigation items={navigationItems} />
          <div className="flex flex-col items-center gap-4">
            <MeshLogo />
            <p>&copy; Copyright TX Labs &middot; All rights reserved</p>
          </div>
        </div>

      </Transition.Child>
    </Dialog>
  </Transition>
);

export default MobileMenuModal;
