import { Route, Routes } from 'react-router-dom';
// import css from './App.module.css';
import { lazy } from 'react';
import { Layout } from './Layout';
// import Modals from './components/CamperModal/Modals';

const Home = lazy(() => import('./pages/Home/Home'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<NotFoundPage to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
