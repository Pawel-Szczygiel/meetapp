
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import { useFavoritesContext } from '../../store/FavoritesContext';

const MeetupItem = ( {id,image, title, address, description} ) => {

  const {
      addFavoriteHandler,
      itemIsFavoriteHandler, 
      removeFavoriteHandler
    } = useFavoritesContext();

  const itemIsFavorites = itemIsFavoriteHandler(id);

  function toggleFavoritesStatusHandler() {
    itemIsFavorites ? 
      removeFavoriteHandler(id) 
      : 
      addFavoriteHandler(
        {id,image, title, address, description}
      );
    
    }
  

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title}/>
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorites ? 'Remove from Favorites' : 'To Favorites'}
            </button>
        </div>
      </Card>
    </li>
  )

}

export default MeetupItem
