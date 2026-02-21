import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Caraousal from './components/Carousal';
import Offers from './components/Offers';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Caraousal />
      <Offers />
      <Footer />
    </div>
  );
}


{/* <h1 style={{textAlign:"center", color:"blue", backgroundColor:"skyblue"}}>Hello World</h1>

        <p className="paragraph-style">React is a open source javascript library maintained by facebook community</p> */}

export default App;