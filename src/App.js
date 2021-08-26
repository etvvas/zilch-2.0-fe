
import './App.css';
// import { io } from 'socket.io-client';
import Header from './components/header/Header';
import AuthForm from './components/auth/AuthForm';
import { Switch, Route } from 'react-router-dom';
import RoomsList from './components/rooms/RoomsList';
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
        <Route path="/rooms" exact component={RoomsList} />
        <Route path="/rooms/:room" exact component={GameRoom} />
        </SocketContext.Provider>
      </Switch>
    </>
  );
}

export default App;
