import DarkModeSwitch from './Component/DarkModeSwitch'
import { Route,Switch } from 'react-router';
import Home from './Component/Home';
import AddContact from './Component/AddContact';
import EditContact from './Component/EditContact';

import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
toast.configure();

function App() {
  return (
    <div className="App">
      <DarkModeSwitch/>
      <Switch>
        <Route  exact path="/"   component={()=><Home/>}></Route>
        <Route  path="/add"  component={()=><AddContact/>}></Route>
        <Route  path="/edit/:email"  component={()=><EditContact/>}></Route>
      </Switch>
    </div>
  );
}

export default App;
