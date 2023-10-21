import React from 'react'
import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css';
import { useFavoritesContext } from '../../store/FavoritesContext';

const MainNavigation = () => {
  const {totalFavorites} = useFavoritesContext()

  return (
    <header className={classes.header}>
      <div>
        <h2 className={classes.logo}>React Meetups</h2>
      </div>
      <ul className={classes.list}>
          <li>
              <Link to='/'>All Meetups</Link>
          </li>
          <li>
              <Link to='/new-meetup'>Add New Meetup</Link>
          </li>
          <li>
              <Link to='/favorites'>
                favorites
                <span className={classes.badge}>{totalFavorites}</span>
                </Link>
          </li>
      </ul>
    </header>
  )
}

export default MainNavigation
