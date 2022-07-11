import "./App.css";
import { Footer } from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Header company="Chase" />
      <h3>Component goes here..</h3>
      <Footer />
    </div>
  );
}

export default App;
