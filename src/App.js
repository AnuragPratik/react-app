import "./App.css";
import ContextDemo from "./components/contextapi/ContextDemo";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Button from "./components/hooks/Button";
import DataLoader from "./components/hooks/DataLoader";
import TestuseFetch from "./components/hooks/TestuseFetch";
import ChildParentInvoke from "./components/intercomp/ChildParentInvoke";
import CompLifeCycle from "./components/lifecycle/CompLifeCycle";
import WeatherComponent from "./components/lifecycle/Weather";
import PureDemo from "./components/props-states/PureDemo";
import StatefulApp from "./components/props-states/StatefulApp";
import TextInput from "./components/props-states/TextInput";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Header company="ACME" />
      {/* <h3>Component goes here..</h3> */}
      {/* <StatefulApp /> */}
      {/* <TextInput /> */}
      {/* <PureDemo /> */}
      {/* <ChildParentInvoke /> */}
      {/* <CompLifeCycle /> */}
      {/* <WeatherComponent /> */}
      {/* <ContextDemo /> */}
      {/* <Button /> */}
      {/* <DataLoader /> */}
      <TestuseFetch />
      <Footer />
    </div>
  );
}

export default App;
