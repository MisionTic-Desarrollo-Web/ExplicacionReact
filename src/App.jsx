
import Index from 'pages';
import GatoSiamesInfoPage from 'pages/gatoSiames';
import './styles/styles.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { GatoPersa } from 'pages/gatoPersa';
import Layout from 'Layouts/Layout';



function App() {
  return (
    <div classNameName="App">
      <Router>
        <Layout>
          <Switch>
            <Route path='/gatoPersa'>
                  <GatoPersa/>
              </Route>
              <Route path='/gatoSiames'>
                  <GatoSiamesInfoPage/>
              </Route>
              <Route path='/'>
                    <Index/>
              </Route>
          </Switch>
          </Layout>
        </Router>
      
    </div>
  );
}


export default App;
