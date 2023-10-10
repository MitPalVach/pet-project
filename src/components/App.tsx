import { Link, Route, Routes } from "react-router-dom";
import '../styles/index.scss';
import { AboutPageAsync } from "../pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "../pages/MainPage/MainPage.async";
import { Suspense } from "react";
import { useTheme } from "../theme/useTheme";
import { classNames } from "../helpers/classNames/classNames";

function App() {
	const { theme, toggleTheme } = useTheme();

	const bool = true;

	return (
		<div className={ classNames( 'app', {}, [ theme ] ) }>
			<button onClick={ toggleTheme }>toggle theme</button>

			<Link to={ '/' }>Main</Link>
			<Link to={ '/about' }>About</Link>

			<Suspense fallback={ <div>Loading...</div> }>
				<Routes>
					<Route path={ '/' } element={ <MainPageAsync/> }/>
					<Route path={ '/about' } element={ <AboutPageAsync/> }/>
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;