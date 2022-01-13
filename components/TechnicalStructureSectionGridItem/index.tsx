import type TechnicalStructureSectionGridItemProps from './TechnicalStructureSectionGridItemProps';

const TechnicalStructureSectionGridItem = ({
  item,
  index,
}: TechnicalStructureSectionGridItemProps) => (
  <li className="p-6 card">
    <h3 className="text-[1.375rem]">{`${index + 1}. ${item.title}`}</h3>
    <p>{item.body}</p>
  </li>
);

export default TechnicalStructureSectionGridItem;
