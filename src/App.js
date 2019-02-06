import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'normalize.css';
import styles from './style.css'

import Header from './components/header/Header'
import Home from './components/home/home'
import About from './components/about/about'
const App = () => (
	<BrowserRouter>
		<div>
			<Header />
			<div className={styles.container}>
			<Switch>
				<Route  path="/" component={Home} exact />
				<Route pattern="/about" component={ About } exact />
				<Route component={Home} />
			</Switch>
			</div>
		</div>
	</BrowserRouter>
)
export default App