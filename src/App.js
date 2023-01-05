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
        },{
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
    <RouterProvider router={router} className="App">
      
      <Register/>
    </RouterProvider>
  );
}

export default App;
