import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { useEffect } from 'react';
import emailjs from "@emailjs/browser";
import Root from './routes/Root';
const router = createBrowserRouter([
  {path:'*', Component:Root}
])

function App() {
  useEffect(() => emailjs.init(process.env.REACT_APP_PUBLIC_KEY), []);
  return (
  <RouterProvider router={router}/>
);
}

export default App;
