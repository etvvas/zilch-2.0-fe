import React, { useEffect, useState } from 'react';
import { useSession } from '../../state/SessionProvider';
import avatars from '../../assets/avatars.svg';
import { useParams } from 'react-router-dom';
import { getPlayerGames, getPlayerWins, getUser } from '../../services/profile';

const PlayerProfile = () => {
  const session = useSession();
  // console.log(session)
  const {username} = useParams();
  // console.log('username', username)
  const [user, setUser] = useState('');
  const [wins, setWins] = useState('');
  const [losses, setLosses] = useState('');
  const [zilches, setZilches] = useState('');
  const [uberZilches, setUberZilches] = useState('');

  useEffect(async() => {
    const fetchedUser = await getUser(username);
    setUser(fetchedUser);
    // const fetchedWins = await getPlayerWins(user.userId)
    const fetchedWins = [...Array(6)]
    setWins(fetchedWins.length);
    // const fetchedGames = await getPlayerGames(user.userId);
    const fetchedGames = [...Array(18)]
    setLosses(fetchedGames.length - wins);
  }, [])

  return (
    <>
    <h1>{user.username}'s Profile</h1>
    <div>
      <svg className={svg}>
        <use href={avatars + `#${session.avatar}`} />
      </svg>
      <h2>user: {user.username}</h2>
      <h2>wins: {wins}</h2>
      <h2>losses: {losses} </h2>
      <h2>zilches: </h2>
      <h2>uberZilches: </h2>

    </div>
    </>
  )
}

const svg = `
  w-12
  h-12
  md:w-12
  md:h-12
  my-2
  mx-auto
  border-4
  border-transparent
`;

export default PlayerProfile;
