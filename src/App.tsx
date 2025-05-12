import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Review from './pages/Review';
import UserProfile from './pages/UserProfile';
import Layout from './layout/Layout';

function App() {

  return (

      <Layout>
        <Routes>
        <Route path="./" element={<Home />} />
        <Route path="./review" element={<Review />} />
        <Route path="./userprofile" element={<UserProfile />} />
        </Routes>
      </Layout>

  )
}

export default App
