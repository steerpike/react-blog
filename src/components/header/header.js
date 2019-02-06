import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './header.css'

const Header = () => (
    <header className={style.header}>
        <div className={style.container}>
            <h1 className={style.title}>Start your writing</h1>
            <nav>
                <ul className={style.list}>
                    <li className={style.listItem}>
                        <NavLink exact to="/" className={style.link}>Posts</NavLink>
                    </li>
                    <li className={style.listItem}>
                        <NavLink exact to="/about" className={style.link}>About</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
)
export default Header