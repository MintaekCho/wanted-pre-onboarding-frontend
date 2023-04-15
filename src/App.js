import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Error from './pages/Error';
import Root from './pages/Root';
import SignUp from './pages/SignUp';
import Singin from './pages/Singin';
import TodoList from './pages/TodoList';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        {path: '/todo', element: <TodoList />},
        {path: '/signup', element: <SignUp />},
        {path: '/signin', element: <Singin />}
      ]
    }
  ]);
  return (
   <RouterProvider router={router} />
  );
}

export default App;
