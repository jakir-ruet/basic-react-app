import './App.css';
import Jsx from "../components/01-jsx";
import Props from '../components/02-props';

function App() {
    const elementProps = <Props name="Jakir" age="35"/>
  return (
    <div>
        <p>Hello</p>
        <Jsx/>
        {elementProps}
    </div>
  );
}

export default App;
