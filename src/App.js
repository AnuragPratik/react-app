import "./App.css";
import ContextDemo from "./components/contextapi/ContextDemo";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import ButtonComponent from "./components/hoc/ButtonComponent";
import HoverComponent from "./components/hoc/HoverComponent";
import Button from "./components/hooks/Button";
import DataLoader from "./components/hooks/DataLoader";
import TestuseFetch from "./components/hooks/TestuseFetch";
import ChildParentInvoke from "./components/intercomp/ChildParentInvoke";
import CompLifeCycle from "./components/lifecycle/CompLifeCycle";
import WeatherComponent from "./components/lifecycle/Weather";
import PureDemo from "./components/props-states/PureDemo";
import StatefulApp from "./components/props-states/StatefulApp";
import TextInput from "./components/props-states/TextInput";
import SpaApp from "./spa/SpaApp";

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
      {/* <TestuseFetch /> */}
      {/* <SpaApp /> */}
      <ButtonComponent />
      <HoverComponent />
      <Footer />
    </div>
  );
}

export default App;
