import './App.css';
import { io } from 'socket.io-client';
import Header from './components/header/Header';
import AuthForm from './components/auth/AuthForm';
import { Switch, Route } from 'react-router-dom';

// io('https://zilch-v2-staging.herokuapp.com/')

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact={true} component={AuthForm} />
      </Switch>
    </>
  );
}

export default App;
