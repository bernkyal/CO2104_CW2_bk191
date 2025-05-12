
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Review from './pages/Review';
import UserProfile from './pages/UserProfile';
import Layout from './layout/Layout';

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Review />} />
        <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
