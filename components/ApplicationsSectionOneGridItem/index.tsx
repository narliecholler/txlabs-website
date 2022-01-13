import type ApplicationsSectionOneGridItemProps from './ApplicationsSectionOneGridItemProps';
import Icon from '../Icon';

const ApplicationsSectionOneGridItem = ({
  item,
}: ApplicationsSectionOneGridItemProps) => (
  <li className="flex flex-col items-center justify-center gap-2 lg:gap-4 p-8 lg:p-16 card">
    <Icon icon={item.icon} />
    <h3 className="text-center text-[1.15rem]">{item.title}</h3>
  </li>
);

export default ApplicationsSectionOneGridItem;
