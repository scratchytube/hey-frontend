import Header from './Header'
import NavBar from './NavBar'
import ViewContainer from './ViewContainer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import './App.css';

function App() {
  return (
    <div className="App">
      <Router> 
        <Switch>

            <Header />
          
            <NavBar />

          <Route exact path="/" >
            <ViewContainer />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
