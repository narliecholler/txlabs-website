import { useState, useCallback } from 'react'

import { IoChevronDownOutline } from 'react-icons/io5';
import type NavigationItemProps from './NavigationItemProps';
import Icon from '../Icon';


const NavigationItem = ({ item }: NavigationItemProps) => {
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
    <li className="group pt-8 pb-8">
      <div data-id={item.title.toLowerCase()} className="flex justify-center items-center hover:cursor-pointer">
        <span className="pr-1 text-lg font-display group-hover:text-[#37D19B]">{item.title}</span>
        <IoChevronDownOutline size={20} className="group-hover:text-[#37D19B]" />
      </div>
      <ul className={`z-[10] hidden group-hover:block absolute w-64 ml-[-3%] top-[93px] p-8 pt-5 space-y-4 bg-black border border-[#2c2c2c] rounded-lg bg-gradient-to-t from-[#1d0040] to-[#0c0c0c]`}>
        <span className="absolute w-6 h-6 bg-[#0c0c0c] rounded-full -top-2 left-[23%]" />
        {item.children.map((child, index) => (
          <li
            key={child.title}
            className="first:pt-8"
          >
            <a
              data-icon={child.icon}
              onMouseOver={(e) => handleHoverText(e)}
              onMouseLeave={() => handleHoverIcon()}
              target="_blank" rel="noreferrer" className={`flex items-center gap-3 hover:text-[#37D19B]`} href={child.href}>
              <div
                className="flex items-center justify-center w-[20%]"
              >
                <Icon hover={hovered} icon={child.icon} type={textIcon} />
              </div>
              <span
                className={`w-[100%] mt-[5px] text-lg font-display`}>{child.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </li>
  )



}

















//   const [hovered, setHovered] = useState<boolean>(false)
//   const [textIcon, setTextIcon] = useState<string>('')

//   const handleHoverText = useCallback((e: any) => {
//     setHovered(true)
//     setTextIcon(e.currentTarget.dataset.icon)
//   }, [])

//   const handleHoverIcon = useCallback(() => {
//     setHovered(false)
//     setTextIcon('')
//   }, [])

//   return (
//     <li className="relative z-10">
//       <Menu>
//         {({ open }) => (
//           <>
//             <Menu.Button className={`flex items-center gap-1 hover:text-[#37D19B] ${open ? 'text-[#37D19B]' : 'null'}`}>
//               <span className="text-lg font-display">{item.title}</span>
//               <IoChevronDownOutline size={20} />
//             </Menu.Button>
//             <Menu.Items
//               className="absolute w-64 -left-9 p-8 space-y-4 bg-black border border-[#2c2c2c] rounded-lg top-[3.6875rem] bg-gradient-to-t from-[#1d0040] to-[#0c0c0c]"
//               as="ul"
//             >
//               <div className="absolute w-6 h-6 bg-[#0c0c0c] rounded-full -top-2 left-[23%]" />
//               {item.children.map((child, index) => (
//                 <Menu.Item
//                   className={classNames({
//                     '!mt-0': index === 0,
//                   })}
//                   as="li"
//                   key={child.title}
//                 >
//                   {({ active }) => (
//                     <a
//                       onMouseOver={(e) => handleHoverText(e)}
//                       onMouseLeave={() => handleHoverIcon()}
//                       data-icon={child.icon}
//                       target="_blank" rel="noreferrer" className={`flex items-center gap-3 hover:text-[#37D19B] ${active ? 'text-[#37D19B]' : 'text-[#fff]'}`} href={child.href}>
//                       <div
//                         className="flex items-center justify-center w-7"
//                       >
//                         <Icon hover={hovered} icon={child.icon} type={textIcon} />
//                       </div>
//                       <span
//                         className={`w-[100%] mt-[5px] text-lg font-display`}>{child.title}</span>
//                     </a>
//                   )}
//                 </Menu.Item>
//               ))}
//             </Menu.Items>
//           </>
//         )}
//       </Menu>
//     </li>
//   );
// }

export default NavigationItem;
