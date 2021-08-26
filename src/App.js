
import './App.css';
// import { io } from 'socket.io-client';
import Header from './components/header/Header';
import AuthForm from './components/auth/AuthForm';
import { Switch, Route } from 'react-router-dom';
import Lobby from './components/rooms/Lobby';
import GameRoom from './components/rooms/GameRoom';
// import SocketProvider from './state/SocketProvider';
import {SocketContext, socket} from './state/SocketProvider'
function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact={true} component={AuthForm} />
        <SocketContext.Provider value={socket}>
        <Route path="/lobby" exact component={Lobby} />
        <Route path="/lobby/:room" exact component={GameRoom} />
        </SocketContext.Provider>
      </Switch>
    </>
  );
}

export default App;
