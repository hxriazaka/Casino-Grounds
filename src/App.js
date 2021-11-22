import './App.css';
import Navbar from './Components/navbar';
import Bio from './Pages/bio';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Row from './Pages/row';
import UK from './Pages/uk';
import Finland from './Pages/finland';
import Norway from './Pages/norway';
import Sweden from './Pages/sweden';
import USA from './Pages/usa';
import Canada from './Pages/canada';
import Japan from './Pages/japan';
import NEZ from './Pages/nez';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Bio />
      <Switch>
        <Route path='/' exact>
          <Row />
        </Route>
        <Route path='/uk'>
          <UK />
        </Route>
        <Route path='/finland'>
          <Finland />
        </Route>
        <Route path='/norway'>
          <Norway />
        </Route>
        <Route path='/sweden'>
          <Sweden />
        </Route>
        <Route path='/usa'>
          <USA />
        </Route>
        <Route path='/canada'>
          <Canada />
        </Route>
        <Route path='/japan'>
          <Japan />
        </Route>
        <Route path='/new-zealand'>
          <NEZ />
        </Route>
      </Switch>   
    </div>
    </Router>
  );
}

export default App;
