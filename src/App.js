//routing
import { Route, Routes } from 'react-router-dom';

//pages
import AllMeetUps from './pages/AllMeetUps';
import Favorites from './pages/Favorites';
import NewMeetUp from './pages/NewMeetUp';

//components
import Layout from './components/layout/Layout';

//main app
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={ <AllMeetUps /> } />
          <Route path='/new-meetup' element={ <NewMeetUp /> } />
          <Route path='/favorites' element={ <Favorites /> } />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
