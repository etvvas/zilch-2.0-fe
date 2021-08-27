
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
function App() {
  return (
    <>
      <Header />

      <Switch>
        <PrivateRoute path="/" exact={true} component={AuthForm} />
        <SocketContext.Provider value={socket}>
        <PrivateRoute path="/lobby" exact component={Lobby} />
        <PrivateRoute path="/lobby/:room" exact component={GameRoom} />
        </SocketContext.Provider>
      </Switch>
    </>
  );
}

export default App;
