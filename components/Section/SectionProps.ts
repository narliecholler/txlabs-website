import type { ReactNode } from 'react';

type SectionProps = {
  className?: string;
  children: ReactNode;
  topPadding?: boolean; // controls padding top of each section, includes padding by default.
};

export default SectionProps;
