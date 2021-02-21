import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './modules/header/header'
//import Body from './modules/body/body'
import Layout from './modules/Layout';
import Header from './modules/Layout/Header';
import Body from './modules/Layout/Body';
import Content from './modules/Content';
import Page from './modules/Page'
import { Switch, Route } from 'react-router-dom';
import AdminPage from './modules/admin';
import { useDispatch, useSelector } from 'react-redux'
function App() {
  const state = useSelector(state => state);
  return (
    <div className="App">
      <Layout>
        <Header clearState={state} />
        <Body>
          <Switch>
            <Route exact path='/' component={Content} />
            <Route exact path='/content' component={Content} />
            <Route path='/content/tags/:category' component={Content} />
            <Route path='/content/:number' component={Page} />
            <Route path='/admin' component={AdminPage} />
          </Switch>
        </Body>
      </Layout>
    </div>
  );
}

export default App;
