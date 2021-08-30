
import './App.css';
// import { io } from 'socket.io-client';
import Header from './components/header/Header';
import AuthForm from './components/auth/AuthForm';
import { Switch, Route } from 'react-router-dom';
import Lobby from './components/rooms/Lobby';
import GameRoom from './components/rooms/GameRoom';
import PrivateRoute from './components/common/PrivateRoute';
// import SocketProvider from './state/SocketProvider';
import {SocketContext, socket} from './state/SocketProvider'
import PlayerProfile from './components/profile/PlayerProfile';

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact={true} component={AuthForm} />
        <SocketContext.Provider value={socket}>
          <PrivateRoute exact path="/lobby" component={Lobby} />
          <PrivateRoute exact path="/lobby/:room" component={GameRoom} />
          <PrivateRoute exact path="/user/:id" component={PlayerProfile} />
        </SocketContext.Provider>
      </Switch>
    </>
  );
}

export default App;
