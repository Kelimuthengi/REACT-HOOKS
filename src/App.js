import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Usestatestring from './components/usestate/Usestatestring';
import Usestateobject from './components/usestate/Usestateobject';
import Usestatearray from './components/usestate/Usestatearray';
// import Singleinput from "./components/forms/Singleinput";
// import Multipleinputs from './components/forms/Multipleinputs';
// import Useeffect from './components/useeffect/Useeffect';
// import Useref from './components/useref/Useref';
// import Useeffectfetch from './components/useeffect/Useeffectfetch';
// import Useeeffectcleanup from './components/useeffect/Useeeffectcleanup';
// import Simplereturn from './components/conditionalrendering/Simplereturn';
// import Multiplereturns from './components/conditionalrendering/Multiplereturns';
import Propdrilling from './components/propdrilling/Propdrilling';
import Usecontext from './components/usecontext/Usecontext';
import UseReducer from './components/usereducer'
import Error from './components/Error';
import Fetch from './components/customhooks/Fetch';
import Person from './components/Person';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Fetch />}></Route>
        <Route path="/usestatebasics" element={<Usestatestring />} />
        <Route path="/usestateobjects" element={<Usestateobject />} />
        <Route path="/usestatearray" element={<Usestatearray />} />
        <Route path="/propdrilling" element={<Propdrilling />} />
        <Route path='/usecontext' element={<Usecontext/>}/>
        <Route path='/usereducer' element={<UseReducer/>}/>
        <Route path="/person/:id" element={<Person />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
