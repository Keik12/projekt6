import logo from "./logo.svg";
import { GenericForm } from "./Components/GenericForm";
import "./App.css";

function App() {
  const onButtonPress = (name, amount) => {
    console.log(name, amount);
  };
  return (
    <>
      <GenericForm onButtonPress={onButtonPress} />
      <GenericForm title="Wydatki" />
    </>
  );
}

export default App;
