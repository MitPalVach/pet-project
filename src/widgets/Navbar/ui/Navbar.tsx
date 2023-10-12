import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, EAppLinkTheme } from '@/shared/ui/AppLink/AppLink';

interface INavbarProps {
	className?: string;
}

export const Navbar = ( { className }: INavbarProps ) => {

  return (
    <div className={ classNames( cls.Navbar, {}, [ className ] ) }>
      <div className={ cls.links }>
        <AppLink to={ '/' } theme={ EAppLinkTheme.SECONDARY } className={ cls.mainLink }>
          Main
        </AppLink>
        <AppLink to={ '/about' } theme={ EAppLinkTheme.SECONDARY }>
          About
        </AppLink>
      </div>
    </div>
  );
};

