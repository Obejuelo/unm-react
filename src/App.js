import React, {useState, useEffect} from 'react';
import { resize, container } from './util/resize';
import { Route, Switch } from 'react-router';
import {withRouter} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './routes/public/Home';
import News from './routes/public/News';
import Contact from './routes/public/Contact';
import Galery from './routes/public/Galery';
import Philosophy from './routes/public/Philosophy';
import History from './routes/public/History';
import Privacity from './routes/public/Privacity';
import Inter from './routes/public/Inter';
import Lic from './routes/public/Lic';
import Postgr from './routes/public/Postgr';
import Bach from './routes/public/Bach';
import Spam from './routes/public/Spam';
import Prepa from './routes/public/Prepa';
import Directory from './routes/public/Directory';
import Facilities from './routes/public/Facilities';
import SingleNew from './routes/public/SingleNew';
import Login from './routes/public/Login';

// Url to fetch
import {url} from './util/config';
// Private routes
import Dashboard from './routes/private/Dashboard';
import Dgalery from './routes/private/Dgalery';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [cont, setCont] = useState('');
  const [token, setToken] = useState('');
  const [login, setLogin] =useState(false);

    useEffect(() => {
        function updateWidth() { resize(setWidth); }
        setCont(container(width));
        window.addEventListener('resize', updateWidth);
        
        const auth = (auth) => {
          let body = {token: auth};
    
          fetch(`${url}api/session`, {
              method: 'POST',
              body: JSON.stringify(body),
              headers:{
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              }
          }).then(res=>res.json())
          .then(data => {
              if(data.ok){
                setLogin(true);
                // console.log(data);
              }
          }).catch(err=>{
              console.log(err);
          });
        }

        const changeToken = () => {
          if(localStorage.length !== 0) {
            let user = JSON.parse(localStorage.getItem('user'));
            setToken(user.token);
            auth(user.token);
          }
        }
        changeToken();
        
        return () => {
            window.removeEventListener('resize', ()=>{
              updateWidth();
              changeToken();
            });
        }
    }, [width, cont, token]);

    const signIn = (body) => {
      fetch(`${url}api/login`, {
          method: 'POST',
          body: JSON.stringify(body),
          headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
      }).then(res=>res.json())
      .then(data => {
          if(data.ok === true){
              setToken(data.token);
              localStorage.setItem('user', JSON.stringify(data));
          }
          else console.log(data);
          
      }).catch(err => {
          console.log(err);
      });
    }

    const authenticate = () => {
      if(login) return Dashboard
      else return Home
    }

  return (
    <div className="App">
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={300}
            classNames="fade">

            {/* Public Routes and */}
            <Switch location={location}>
              <Route exact path='/' component={()=><Home container={cont}/>} />
              <Route path='/news' component={News} />
              <Route path='/contact' component={Contact} />
              <Route path='/galery' component={Galery} />
              <Route path='/philosophy' component={Philosophy} />
              <Route path='/history' component={History} />
              <Route path='/privacity' component={Privacity} />
              <Route path='/inter' component={Inter} />
              <Route path='/lic' component={Lic} />
              <Route path='/master' component={()=><Postgr container={cont}/>} />
              <Route path='/bach' component={()=><Bach container={cont}/>} />
              <Route path='/spam' component={()=><Spam container={cont}/>} />
              <Route path='/prepa' component={()=><Prepa container={cont}/>} />
              <Route path='/directory' component={Directory} />
              <Route path='/facilities' component={()=><Facilities container={cont}/>} />
              <Route path='/single-new/:id' component={SingleNew} />

              {/* Private Routes */}
              <Route path='/login' component={()=><Login token={token} signIn={signIn}/>}/>
              <Route path='/dashboard/home' component={authenticate()}/>
              <Route path='/dashboard/galery' component={Dgalery}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </div>
  );
}

export default withRouter(App);
