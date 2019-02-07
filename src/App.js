import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'normalize.css';
import styles from './style.css'

import posts from '../blog-posts.json'

import Header from './components/header/Header'
import Home from './components/home/home'
import About from './components/about/about'
import PostDetail from './components/post/PostDetail'
const App = () => (
	<BrowserRouter>
		<div>
			<Header />
			<div className={styles.container}>
			<Switch>
				<Route  path="/" component={Home} exact />
				<Route path='/post/:slug' component={(routerProps) => {
						const post = posts.posts.filter(post => routerProps.match.params.slug === post.slug)
						return <PostDetail post={post[0]} />
					}} />
				<Route path="/about" component={ About } exact />
				<Route component={Home} />
			</Switch>
			</div>
		</div>
	</BrowserRouter>
)
export default App