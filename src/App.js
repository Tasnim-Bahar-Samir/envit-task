import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children: [
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/home',
          element:<Home/>
        },
        {
          path: '/login',
          element: <Login/>
        },
      {
        path:'/register',
        element: <Register/>
      }
      ]
    },
    
  ])
  return (
    <div>
      <Toaster/>
      <RouterProvider router={router} className="App">
    </RouterProvider>
    </div>
  );
}

export default App;
