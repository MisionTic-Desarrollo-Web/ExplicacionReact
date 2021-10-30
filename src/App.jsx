
import Index from 'pages';
import GatoSiamesInfoPage from 'pages/gatoSiames';
import './styles/styles.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



function App() {
  return (
    <div classNameName="App">
      <Router>
          <Switch>              
              <Route path='/gatoSiames'>
                  <GatoSiamesInfoPage/>
              </Route>
              <Route path='/'>
                    <Index/>
              </Route>
          </Switch>
        </Router>
      
    </div>
  );
}


export default App;
