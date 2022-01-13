import type EcosystemSectionFeaturesProps from './EcosystemSectionFeaturesProps';

const EcosystemSectionFeatures = ({
  features,
}: EcosystemSectionFeaturesProps) => (
  <ul className="flex flex-col lg:flex-row gap-[5%]">
    {features.map((feature, index) => {
      return (
        <li key={`feature_${index}`} className="relative flex-1 mb-10 lg:mb-0">
          <div className="flex">
            <span className="w-1 bg-white mt-[7px] mb-[9px]"></span>
            <p id="ecosystemList" className="w-[100%] font-bold text-[1.375rem] font-display pl-4">{feature}</p>
          </div>
        </li>
      )
    })}
  </ul>
);


export default EcosystemSectionFeatures;
