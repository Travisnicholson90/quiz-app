import './App.css'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/login';
import Signup from './pages/signup';
import QuizPage from './pages/Quizzes/QuizPage';
import Quiz from './pages/Quizzes/Quiz';
import Dashboard from './pages/Dashboard/Dashboard';


function App() {


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <RootLayout /> }>
      <Route index element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="quizzes" element={ <QuizPage /> } />
      <Route path='/quiz/:id' element={ <Quiz />} />
      <Route path='/dashboard/:id' element={ <Dashboard />} />      
    </Route>
  )
 )
 
  return (
    <RouterProvider router={router} />
  )
}

export default App
