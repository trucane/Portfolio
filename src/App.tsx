import { HomeRoute } from './RouteComponents/HomeRoute';
import { AboutRoute } from './RouteComponents/AboutRoute'; 
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './assets/global/fonts.css';
import './assets/global/colors.css';

function App() { 
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<HomeRoute />} />
        <Route path='/about' element={<AboutRoute />} />
      </Routes>
    </div>
  );
}

export default App;
