// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import React from 'react';
import Profile from './pages/private/profile';
import UserList from './pages/private/userlist';
import BasicNavBar from './pages/public/navbar';
import SignIn from './pages/public/signin';
import SignUp from './pages/public/signup';
import WordApi from './apis/wordapi';
import WeatherApi from './apis/weatherapi';
import Notes from './components/Notes/Notes';
import Calculator from './components/Calculator/Calculator';
import MovieApi from './apis/movieapi';
import PrivateRoute from './context/routes/PrivateRoute';
import PublicRoute from './context/routes/PublicRoute';

function App() {
  return (
    <BrowserRouter>
        <BasicNavBar />
        <Routes>
          <Route path="/" element={
            <PublicRoute>
              <SignIn/>
            </PublicRoute>
          } />
          <Route path="/signin" element={
            <PublicRoute>
              <SignIn/>
            </PublicRoute>
          } />
          <Route path="/signup" element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          } />
          <Route path="/profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
          <Route path="/userlist" element={
            <PrivateRoute>
              <UserList />
            </PrivateRoute>
          } />
          <Route path="/wordapi" element={
            <PrivateRoute>
              <WordApi />
            </PrivateRoute>
          }/>
          <Route path="/weatherapi" element={
            <PrivateRoute>
              <WeatherApi />
            </PrivateRoute>
          }/>
          <Route path="/movieapi" element={
            <PrivateRoute>
              <MovieApi />
            </PrivateRoute>
          }/>
          <Route path="/notes" element={
            <PrivateRoute>
             <Notes /> 
            </PrivateRoute>
          }/>
          <Route path="/calculator" element={
            <PrivateRoute>
              <Calculator />
            </PrivateRoute>
          }/>
        </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
export default App;
