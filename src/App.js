import Header from "./Components/Header/Header";
import Input from "./Components/Input/Input";
import Definition from "./Components/Definition/Definition";

import Word from "./Contexts/Word";

import "./App.css";

const App = () => {
  return (
    <Word>
      <Header />
      <Input />
      <Definition />
    </Word>
  );
};

export default App;
