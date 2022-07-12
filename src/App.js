import "./App.css";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import ChildParentInvoke from "./components/intercomp/ChildParentInvoke";
import PureDemo from "./components/props-states/PureDemo";
import StatefulApp from "./components/props-states/StatefulApp";
import TextInput from "./components/props-states/TextInput";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Header company="Chase" />
      {/* <StatefulApp /> */}
      {/* <TextInput /> */}
      {/* <PureDemo /> */}
      {/* <ChildParentInvoke /> */}
      <h3>Component goes here..</h3>
      <Footer />
    </div>
  );
}

export default App;
