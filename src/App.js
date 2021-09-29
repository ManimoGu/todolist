import './App.css';
import Menu from './Menu/Menu';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Movies from './Movies/Movies';
import Contact from './Contact/contact';
import Home from './Home/Home'



function App() {

  return (

    <Router>

    <div className ='container'>

      <Menu/>
      
      <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/Movies' component={Movies}/>
      <Route path='/Contact' component={Contact}/>

      </Switch>
      
     
    </div>

    </Router>
  );
}

export default App;
