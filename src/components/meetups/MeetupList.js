import classes from './MeetupList.module.css';
import MeetupItem from './MeetupItem'

const MeetupList = ( {items} ) => {

  
  return (
    <ul className={classes.list}>
      {items.map( meetup => <MeetupItem key={meetup.id} {...meetup} /> )}
    </ul>
  )
}

export default MeetupList
