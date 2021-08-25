import './App.css';
import { io } from 'socket.io-client';
import Header from './components/header/Header';
import AuthForm from './components/auth/AuthForm';

io('https://zilch-v2-staging.herokuapp.com/')

function App() {
  return (
    <>
      <Header />
      <AuthForm />
    </>
  );
}

export default App;
