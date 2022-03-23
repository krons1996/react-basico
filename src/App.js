import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button } from "react-bootstrap"

function App() {
  return (
    <div>
      <Menu />
      <h1>HELLO WORLD</h1>
      <Button variant="primary">Primary</Button>
      <Alert variant="danger">
        This is a danger alert—check it out!
      </Alert>
    </div>
  );
}

export default App;
