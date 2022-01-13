import { useState, useCallback } from 'react'
import type FooterNavigationItemProps from './FooterNavigationItemProps';
import Icon from '../Icon';

const FooterNavigationItem = ({ item }: FooterNavigationItemProps) => {
  const [hovered, setHovered] = useState<boolean>(false)
  const [textIcon, setTextIcon] = useState<string>('')

  const handleHoverText = useCallback((e: any) => {
    setHovered(true)
    setTextIcon(e.currentTarget.dataset.icon)
  }, [])

  const handleHoverIcon = useCallback(() => {
    setHovered(false)
    setTextIcon('')
  }, [])

  return (
    <li className="space-y-6">
      <h3 className="text-[1.375rem]">{item.title}</h3>
      <ul className="space-y-4">
        {item.children.map((child) => (
          <li key={child.title}>
            <a
              onMouseOver={(e) => handleHoverText(e)}
              onMouseLeave={() => handleHoverIcon()}
              data-icon={child.icon}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-[#37D19B]"
              href={child.href}
            >
              <div
                className="flex items-center justify-center w-7"
              >
                <Icon hover={hovered} icon={child.icon} type={textIcon} />
              </div>
              <span
                className={`w-[100%] mt-[5px] text-lg font-display`}>{child.title}</span>
            </a>
            {/* <a
              onMouseOver={(e) => handleHoverText(e)}
              onMouseLeave={() => handleHoverIcon()}
              data-icon={child.icon}
              target="_blank"
              rel="noreferrer"
              className="flex hover:text-[#37D19B]"
              href={child.href}>
              <div className="flex items-center w-[30%] mr-[5px]">
                <Icon hover={hovered} icon={child.icon} type={textIcon} />
              </div>
              <span className="w-[100%] mt-[5px] text-lg font-display">{child.title}</span>
            </a> */}
          </li>
        ))}
      </ul>
    </li>
  )
}

export default FooterNavigationItem;
