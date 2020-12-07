import StoresContainer from './containers/StoresContainer/StoresContainer';
import './App.css';
import MenuAppBar from './components/nav/MenuAppBar';
import AddStore from './components/addStore/AddStore';
import { Divider } from '@material-ui/core';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import SingleStorePage from './containers/SingleStorePage/SingleStorePage';

function App() {
  return (
    <Router>
      <div className='App'>
        <MenuAppBar />

        <div>
          <Switch>
            <Route path='/' exact>
              {' '}
              <AddStore />
              <Divider />
              <h1 className='store__header__text'>Our Existing Stores</h1>
              <StoresContainer />
            </Route>
            <Route component={SingleStorePage} path='/:id' />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
