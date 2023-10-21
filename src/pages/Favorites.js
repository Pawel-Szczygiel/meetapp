import MeetupList from "../components/meetups/MeetupList";
import { useFavoritesContext } from "../store/FavoritesContext"


const Favorites = () => {

  const { favorites, totalFavorites } = useFavoritesContext();

  return (
    <section>
      <h1>My Favorites</h1>
      {totalFavorites === 0 ? 
        <p>You got no favorites yet. Start adding some?</p>
        :
        <MeetupList items={favorites}/>
      }
    </section>
  )
}

export default Favorites
