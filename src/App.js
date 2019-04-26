import React, {useState, useEffect} from 'react';
import { resize, container } from './util/resize';
import { Route, Switch } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './routes/Home';
import News from './routes/News';
import Navbar from './shared/navbar/Navbar';
import Contact from './routes/Contact';
import Galery from './routes/Galery';
import Philosophy from './routes/Philosophy';
import History from './routes/History';
import Privacity from './routes/Privacity';
import Inter from './routes/Inter';
import Lic from './routes/Lic';
import Postgr from './routes/Postgr';
import Bach from './routes/Bach';
import Spam from './routes/Spam';
import Directory from './routes/Directory';
import Facilities from './routes/Facilities';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [cont, setCont] = useState('');

    useEffect(() => {
        function updateWidth() { resize(setWidth); }
        setCont(container(width));
        window.addEventListener('resize', updateWidth);
        
        return () => {
            window.removeEventListener('resize', updateWidth);
        }
    }, [width, cont])

  return (
    <div className="App">
      <Navbar />
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={300}
            classNames="fade">

            {/* Routes and pages */}
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
              <Route path='/directory' component={Directory} />
              <Route path='/facilities' component={()=><Facilities container={cont}/>} />
            </Switch>

          </CSSTransition>
        </TransitionGroup>
      )} />
    </div>
  );
}

export default App;
