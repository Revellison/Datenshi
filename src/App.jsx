import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import UserCard from './components/UserCard'
import UserCardContainer from './components/UserCardContainer'
import { useParams } from 'react-router-dom'
import Header from './components/header/Header'
import UserProfile from './components/UserProfile'

function UserPage({ user }) {
  if (!user) return <div style={{ padding: 32 }}>Пользователь не найден</div>;
  return <UserProfile user={user} />;
}

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/src/datacard.json')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <UserCardContainer>
            {users.map(user => <UserCard key={user.userId} {...user} />)}
          </UserCardContainer>
        } />
        <Route path="/user/:userId" element={<UserPageWrapper users={users} />} />
      </Routes>
    </>
  )
}

function UserPageWrapper({ users }) {
  const { userId } = useParams();
  const user = users.find(u => String(u.userId) === String(userId));
  return <UserPage user={user} />;
}

export default App
