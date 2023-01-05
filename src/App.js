import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>
    },
    {
      path: '/login',
      element: <Login/>
    },
  {
    path:'/register',
    element: <Register/>
  }
  ])
  return (
    <RouterProvider router={router} className="App">
      
      <Register/>
    </RouterProvider>
  );
}

export default App;
