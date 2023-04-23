import { HomeRoute } from './RouteComponents/HomeRoute';
import { AboutRoute } from './RouteComponents/AboutRoute'; 
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() { 
  return (

    <Routes>
      <Route path='/' element={<HomeRoute />} />
      <Route path='/about' element={<AboutRoute />} />
    </Routes>
  );
}

export default App;
