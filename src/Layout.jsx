import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Loader from './components/Loader/Loader';
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
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              background: '#28a745',
              color: '#fff',
            },
          },
          error: {
            duration: 3000,
            style: {
              background: '#e44848',
              color: '#fff',
            },
          },
        }}
        containerStyle={{
          top: 124,
        }}
      />
    </>
  );
};
