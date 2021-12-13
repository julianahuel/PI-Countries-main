import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Details } from './components/details/details';
import Form from './components/createActivity/CreateActivity';
import World from './components/home/home';
import Landing from './components/landing/landing';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path = "/" component={Landing} />
          <Route exact path = "/countries" component={World} />
          <Route exact path="/create" component={Form} />
          <Route exact path='/country/:id' component={Details} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
