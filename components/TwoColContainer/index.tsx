import classNames from 'classnames';
import type TwoColContainerProps from './TwoColContainer';

const TwoColContainer = ({ className, children }: TwoColContainerProps) => (
  <div className={classNames("container relative grid items-start grid-cols-1 lg:gap-8 lg:grid-cols-2", className)}>
    {children}
  </div>
);

export default TwoColContainer;
