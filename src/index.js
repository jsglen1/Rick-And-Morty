import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Profile from './components/Profile';
import ErrorPage from './components/ErrorPage';
import Welcome from './components/Welcome';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/welcome/",
    element: <Welcome />,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
  {
    path: "/error/:code",
    element: ({ routeProps }) => <ErrorPage errorCode={routeProps.match.params.code} />,
  },
  {
    path: "*",
    element: <ErrorPage errorCode={404} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

