
import './App.css';
// import { io } from 'socket.io-client';
import Header from './components/header/Header';
import AuthForm from './components/auth/AuthForm';
import { Switch, Route } from 'react-router-dom';
import Lobby from './components/rooms/Lobby';
import GameRoom from './components/rooms/GameRoom';
import SocketProvider from './state/SocketProvider';
import PrivateRoute from './components/common/PrivateRoute';
import Leaderboard from './components/rooms/Leaderboard';
<<<<<<< HEAD
=======
import PlayerProfile from './components/profile/PlayerProfile';
>>>>>>> bdd6bf88b1088e90260a80da978331102946bb5b

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact={true} component={AuthForm} />
        <SocketProvider>
          <PrivateRoute path="/lobby" exact component={Lobby} />
          <PrivateRoute path="/lobby/:room" exact component={GameRoom} />
          <PrivateRoute path="/leaderboard" exact component={Leaderboard} />
<<<<<<< HEAD
=======
          <PrivateRoute path="/profile/:username" exact component={PlayerProfile} />
>>>>>>> bdd6bf88b1088e90260a80da978331102946bb5b
        </SocketProvider>
      </Switch>
    </>
  );
}

export default App;
