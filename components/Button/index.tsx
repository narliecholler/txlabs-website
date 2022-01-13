import classNames from 'classnames';
import type ButtonProps from './ButtonProps';

const Button = ({ className, href, children }: ButtonProps) => (
  <a target="_blank" rel="noreferrer" className={classNames("button", className)} href={href}>
    {children}
  </a>
);

export default Button;
