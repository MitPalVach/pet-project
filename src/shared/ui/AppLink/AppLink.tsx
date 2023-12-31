import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';

export enum EAppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface IAppLinkProps extends LinkProps {
	className?: string;
	theme?: EAppLinkTheme;
}

export const AppLink: FC<IAppLinkProps> = ( props ) => {
  const {
    to,
    children,
    className,
    theme = EAppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={ to }
      className={ classNames( cls.AppLink, {}, [ className, cls[ theme ] ] ) }
      { ...otherProps }
    >
      { children }
    </Link>
  );
};
