import React, { memo } from 'react';
import { ETheme, useTheme } from "@/app/providers/ThemeProvider";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import LightIcon from '@/widgets/assets/icons/theme-light.svg';
import DarkIcon from '@/widgets/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from "@/shared/ui/Button/Button";

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = memo( ( { className }: ThemeSwitcherProps ) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			theme={ ThemeButton.CLEAR }
			onClick={ toggleTheme }
			className={ classNames( cls.ThemeSwitcher, {}, [ className ] ) }
		>
			{ theme === ETheme.DARK ? <DarkIcon/> : <LightIcon/> }
		</Button>
	);
} );
