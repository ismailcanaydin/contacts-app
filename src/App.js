import './App.css';
import Contacts from './components/Contacts';
import Edit from './components/Contacts/Edit';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Contacts />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      <div id={'container'}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
