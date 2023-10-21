import React, { createContext, useContext, useState} from 'react'

const AppContext = createContext({
    favorites: [],
    totalFavorites: 0
})

const FavoritesContext = ( {children} ) => {
    const [userFavorites, setUserFavorites] = useState([]);
  
    const addFavoriteHandler = favoriteMeetup => setUserFavorites(prevValue => [...prevValue, favoriteMeetup]);
    
    const removeFavoriteHandler = meetupId => {
        const newFavoriteMeetups = userFavorites.filter(meetup => meetup.id !== meetupId);
        setUserFavorites(newFavoriteMeetups);
    }

    const itemIsFavoriteHandler = meetupId => userFavorites.some(meetup => meetup.id === meetupId);

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavoriteHandler,
        removeFavoriteHandler,
        itemIsFavoriteHandler
    }



    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
  )

}

export const useFavoritesContext = () => useContext(AppContext);

export default FavoritesContext
