import type ApplicationsSectionOneGridProps from './ApplicationsSectionOneGridProps';
import ApplicationsSectionOneGridItem from '../ApplicationsSectionOneGridItem';

const ApplicationsSectionOneGrid = ({
  items,
}: ApplicationsSectionOneGridProps) => (
  <ul className="grid grid-cols-2 gap-5 lg:gap-8">
    {items.map((item) => (
      <ApplicationsSectionOneGridItem key={item.title} item={item} />
    ))}
  </ul>
);

export default ApplicationsSectionOneGrid;
