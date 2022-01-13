import type TechnicalStructureSectionGridProps from './TechnicalStructureSectionGridProps';
import TechnicalStructureSectionGridItem from '../TechnicalStructureSectionGridItem';

const TechnicalStructureSectionGrid = ({
  items,
}: TechnicalStructureSectionGridProps) => (
  <ul className="grid grid-cols-1 gap-6">
    {items.map((item, index) => (
      <TechnicalStructureSectionGridItem
        key={item.title}
        item={item}
        index={index}
      />
    ))}
  </ul>
);

export default TechnicalStructureSectionGrid;
