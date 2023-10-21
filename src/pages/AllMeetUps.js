import React, { useEffect, useState } from 'react'
import axios from "axios";
import MeetupList from "../components/meetups/MeetupList";

const URL = 'https://react-app-e3111-default-rtdb.europe-west1.firebasedatabase.app/meetups.json';


const AllMeetUps = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async url => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(url);
      const meetups = [];
   
      for (const key in data) {
    
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup);
      }

      setIsLoading(false)
      setData(meetups);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData(URL);
  }, []);


  if (isLoading) {
    return <section>
      <h2>Loading...</h2>
    </section>
  }

  return (
    <section>
      <h1>All MeetUps</h1>
      <MeetupList items={ data } />
    </section>
  )
}

export default AllMeetUps