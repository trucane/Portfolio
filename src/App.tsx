import { HomeRoute } from './RouteComponents/HomeRoute';
import { AboutRoute } from './RouteComponents/AboutRoute';
import { PageNotFoundRoute } from './RouteComponents/PageNotFoundRoute';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './assets/global/fonts.css';
import './assets/global/colors.css';
// import './assets/global/break-points.css';

function App() { 
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<HomeRoute />} />
        <Route path='/about' element={<AboutRoute />} />
        <Route path='*' element={<PageNotFoundRoute />}/>
      </Routes>
    </div>
  );
}

export default App;
