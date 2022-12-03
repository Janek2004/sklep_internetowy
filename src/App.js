import Welcome from './Welcome';
import Shop from './Shop';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";

const Root = () => <Outlet />

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Shop />} />
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
