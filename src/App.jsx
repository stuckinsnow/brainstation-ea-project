import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HeaderNav from './components/HeaderNav/HeaderNav';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import UserProfile from './pages/UserProfile/UserProfile';
import ContactPage from './pages/ContactPage/ContactPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
// import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderNav />

        <h1>Hackathon basic page</h1>
        <h2>Let's hack together</h2>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/users" element={<UserProfile />} />
          <Route path="/users/:id" element={<UserProfile />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />}  />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

