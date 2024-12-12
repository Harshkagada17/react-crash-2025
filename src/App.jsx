import {Route, createBrowserRouter , createRoutesFromElements, RouterProvider} from 'react-router-dom'
import React from 'react'
import HomePage from './Pages/HomePage';
import Mainlayout from './layouts/Mainlayout';
import JobPage from './Pages/JobPage';
import NotFound from './Pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/' element={<Mainlayout />}>
    <Route path='/jobs' element={ <JobPage />} />  
    <Route index element={ <HomePage />} />  
    <Route path='*' element={ <NotFound />} />  
  </Route>)
);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App
