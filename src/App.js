import './App.css';
// import { io } from 'socket.io-client';
import Header from './components/header/Header';
import AuthForm from './components/auth/AuthForm';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/header/Navigation';
import RoomsList from './components/rooms/RoomsList';

// io('https://zilch-v2-staging.herokuapp.com/')

function App() {
  return (
    <>
      <Header />
      <Navigation />

      <Switch>
        <Route path="/" exact={true} component={AuthForm} />
        <Route path="/rooms" exact component={RoomsList} />
      </Switch>
    </>
  );
}

export default App;
