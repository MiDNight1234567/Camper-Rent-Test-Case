import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';

import Loader from './components/Loader/Loader';
import Modals from './components/CamperModal/Modals';
import { Navigation } from './components/Navigation/Navigation';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Modals />

      {/* <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: '#f9e3cc',
            color: '#f57a38',
            marginTop: '25px',
          },
        }}
      /> */}
    </>
  );
};
