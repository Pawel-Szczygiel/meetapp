
import NewMeetupForm from "../components/meetups/NewMeetupForm"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const URL = 'https://react-app-e3111-default-rtdb.europe-west1.firebasedatabase.app/meetups.json';

const NewMeetUp = () => {
  const navigate = useNavigate();

  const AddMeetupHandler = async obj => {
    try {
        const place = await axios.post(URL, obj)
  
        if (place.status === 200) {
          navigate('/');
        }
      } catch (error) {
        console.error(error)
    }
  }


  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={AddMeetupHandler}/>
    </section>
  )
}

export default NewMeetUp
