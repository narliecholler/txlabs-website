import classNames from 'classnames';
import SectionProps from './SectionProps';

const Section = ({ topPadding, className, children }: SectionProps) => (
  <section className={classNames(`section ${topPadding ? 'py-20' : 'py-00'}`, className)}>
    {children}
  </section>
);

export default Section;
