import './App.css';
import HtmlComponent from "./component/HtmlComponent";
import CssComponent from "./component/CssComponent";
import JsComponent from "./component/JsComponent";
import ReactComponent from "./component/ReactComponent";
import NodeJSComponent from "./component/NodeJSComponent";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './component/Menu';
import HtmlDetail from './component/HtmlDetail';
import CssDetail from './component/CssDetail';
import Footer from './component/Footer';


function App() {
  return (
    <div className='app'>
      <Router>
        <div className="menu">
          <Menu/>
        </div>
        <div className='container'>
          <div className='body-book'>
            <Switch>
              <Route path="/" exact component={HtmlComponent} /> 
              <Route path="/html" exact component={HtmlComponent} /> 
              <Route path="/html/:id" exact component={HtmlDetail} /> 
              <Route path="/css" exact component={CssComponent} />
              <Route path="/css/:id" exact component={CssDetail} />
              <Route path="/js" component={JsComponent} />
              <Route path="/react" component={ReactComponent} />
              <Route path="/nodejs" component={NodeJSComponent}/>
              <Route path="/html/page/:index" component={HtmlComponent} /> 
            </Switch>
          </div>    
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;