// import logo from './logo.svg';
import './App.css';
// import { BulletinBoard } from './components/BulletinBoard';
// import BoardData from "./components/BoardData";
import Header from "./components/Header";
import Index from './pages/index'
import Footer from './components/Footer'

function App() {
  let currentTime = new Date().toTimeString();
  // let boardComponents = BoardData.map(board => { return(
  //   < BulletinBoard id = {board.id} category={board.category} post={board.post}/>)
  // });
  
    
  return (
    <div className="App">
      
      {/* <BulletinBoard category = "Current events"  post = "Our current event post" />
      <BulletinBoard category = "Anouncement"  post = "Anouncement" />
      <BulletinBoard category = "Quotes of the day"  post = "----" />
      <BulletinBoard post = "we will keep u posted" /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/*    */}
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <div>
          {/* {boardComponents} */}
          <Index />
      
        </div>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
