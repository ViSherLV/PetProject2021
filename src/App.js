import './App.css';
import Layout from './modules/layout';
import Header from './modules/layout/Header';
import Body from './modules/layout/Body';
import Content from './modules/content';
import Page from './modules/page'
import { Switch, Route } from 'react-router-dom';
import AdminPage from './modules/admin';
import { useSelector } from 'react-redux'
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
