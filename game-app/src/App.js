
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/header/Header';
import PrivateRoute from './components/routes/PrivateRoute';
import Register from './pages/auth/Register';
import ForgotPass from './pages/auth/ForgotPass';
import Login from './pages/auth/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
         <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/login" element={<Login />} />
      
      </Routes>
    
    </div>
  );
}

export default App;
