
import './App.css';
import Profile from './Profile/Profil';

function App() {
    const fullName = "Alaya Bacha"
    const bio = "Tunisian"
    const profession = "Fullstack JS Student"
    const handleHello=(a)=> alert(`Hello ${a}`)
  return (
      <div className='ala'>
       <Profile fullName={fullName} bio={bio} profession={profession} handleHello={handleHello}>
        <img className='bb' src='/ala.jpg' alt='NOT FOUND'style={{width:'250px'}} ></img>
       </Profile>
      </div>
    )
  }


export default App;
