
import './App.css';
import Header from './Components/Header';
import Users from './Components/Users';
import {users} from "./Components/Users"

function App() {
  
  return (
    <div className="App">

      {/* DISPLAYING USER DATA */}
      {users.map((user, key) => {
        return <Users name={ user.name} id={user.id} career={user.career} />
      })}

      <Header/>
    </div>
  );
}

export default App;
