import { useState } from 'react';
import Link from 'next/link';
import IconLogo from '../IconLogo';
import MobileMenuButton from '../MobileMenuButton';
import MobileMenuModal from '../MobileMenuModal';
import Navigation from '../Navigation';
import Button from '../Button';

const Header = () => {
  const [mobileMenuModalOpen, setMobileMenuModalOpen] = useState(false);

  return (
    <header id="header" className="top-0 left-0 right-0 z-10 bg-black">
      <div id="innerHeader" className="container flex items-center justify-between border-b py-4 lg:py-0">
        <Link href="/">
          <a className="block" aria-label="Home">
            <IconLogo />
          </a>
        </Link>
        <MobileMenuButton
          mobileMenuModalOpen={mobileMenuModalOpen}
          setMobileMenuModalOpen={setMobileMenuModalOpen}
        />
        <MobileMenuModal
          open={mobileMenuModalOpen}
          onClose={() => setMobileMenuModalOpen(false)}
          navigationItems={[
            {
              title: 'Learn',
              children: [
                {
                  icon: 'file',
                  title: 'Whitepaper',
                  href: '/pdf/TX Mesh Whitepaper.pdf',
                },
                {
                  icon: 'github',
                  title: 'GitHub',
                  href: 'https://github.com/Transaction-Labs',
                },
              ],
            },
            {
              title: 'Connect',
              children: [
                {
                  icon: 'twitter',
                  title: 'Twitter',
                  href: 'https://twitter.com/tx_labs',
                },
                {
                  icon: 'telegram',
                  title: 'Telegram',
                  href: 'https://t.me/txmesh',
                },
                {
                  icon: 'discord',
                  title: 'Discord',
                  href: 'https://discord.gg/9eeRHxSCTZ',
                },
                {
                  icon: 'medium',
                  title: 'Medium',
                  href: 'https://tx-labs.medium.com/',
                },
              ],
            },
            {
              title: 'Company',
              children: [
                {
                  icon: 'user',
                  title: 'Jobs',
                  href: 'https://tx-labs.notion.site/Join-TX-Labs-688700782d9849d88541cc6a4e1aaf48',
                },
              ],
            },
          ]}
        />
        <div className="items-center hidden gap-8 lg:flex">
          <Navigation
            items={[
              {
                title: 'Learn',
                children: [
                  {
                    icon: 'file',
                    title: 'Whitepaper',
                    href: '/pdf/TX Mesh Whitepaper.pdf',
                  },
                  {
                    icon: 'github',
                    title: 'GitHub',
                    href: 'https://github.com/Transaction-Labs',
                  },
                ],
              },
              {
                title: 'Connect',
                children: [
                  {
                    icon: 'twitter',
                    title: 'Twitter',
                    href: 'https://twitter.com/tx_labs',
                  },
                  {
                    icon: 'telegram',
                    title: 'Telegram',
                    href: 'https://t.me/txmesh',
                  },
                  {
                    icon: 'discord',
                    title: 'Discord',
                    href: 'https://discord.gg/9eeRHxSCTZ',
                  },
                  {
                    icon: 'medium',
                    title: 'Medium',
                    href: 'https://tx-labs.medium.com/',
                  },
                ],
              },
            ]}
          />
          <Button className="hover:bg-white hover:text-[#000]" href="https://tx-labs.notion.site/Join-TX-Labs-688700782d9849d88541cc6a4e1aaf48">
            We are hiring!
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
