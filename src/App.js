import "./reset.css";
import "./App.css";

import Logo from "./Components/Logo";
import Balance from "./Components/Balance";
import { GenericForm } from "./Components/GenericForm";
import { FinancialList } from "./Components/FinancialList";

const App = () => {
  const onButtonPress = (name, amount) => {
    console.log(name, amount);
  };

  return (
    <>
      <Logo />
      <Balance />
      <GenericForm onButtonPress={onButtonPress} />
      <GenericForm title="Wydatki" />
      <FinancialList />
    </>
  );
};

export default App;
