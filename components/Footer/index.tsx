import Logo from '../Logo';
import FooterNavigation from '../FooterNavigation';

const Footer = () => (
  <footer>
    <div id="footer" className="container flex flex-col items-center justify-between gap-16 py-16 lg:flex-row lg:items-start">
      <div className="order-2 space-y-16 lg:-order-1">
        <Logo />
        <p>&copy; Copyright TX Labs &middot; All rights reserved</p>
      </div>
      <FooterNavigation
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
    </div>
  </footer>
);

export default Footer;
