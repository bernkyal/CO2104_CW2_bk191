import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Review from './pages/Review';
import UserProfile from './pages/UserProfile';
import Layout from './layout/Layout';

function App() {

  return (

      <Routes>
      {/* 
        Parent route renders your Layout (NavBar + Footer + an <Outlet/> for children)
        at path="/". 
      */}
      <Route path="/" element={<Layout />}>
        {/* index = matches exactly "#/" */}
        <Route index element={<Home />} />

        {/* matches "#/review" */}
        <Route path="review" element={<Review />} />

        {/* matches "#/userprofile" */}
        <Route path="userprofile" element={<UserProfile />} />
      </Route>
    </Routes>

  )
}

export default App
