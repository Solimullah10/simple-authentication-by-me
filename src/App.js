import logo from './logo.svg';
import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from './firebase.init'
import { useState } from 'react';
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({})
  const provider = new GoogleAuthProvider();
  const hadleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.log('error', error)
      })
  }
  return (
    <div className="App">
      <button style={{ 'display': 'block', 'margin': '10px auto' }} onClick={hadleGoogleSignIn}>Google sign</button>
      <h1>Users</h1>
      <img src={user.photoURL} alt="" />
      <h2>Name: {user.displayName}</h2>
      <h5>Email: {user.email}</h5>
    </div>
  );
}

export default App;
