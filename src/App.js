import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
//import {Greet}          from './components/Greet'; //named import //* Functional component
//import Welcome          from './components/Welcome'; //default import //* Class component
//import { Hello }        from './components/Hello';
//import Message          from './components/Message';
//import Count            from './components/Count';
//import FunctionClick    from './components/FunctionClick';
//import ClassClick       from './components/ClassClick';
//import EventBind        from './components/EventBind';
//import ParentComponent  from './components/ParentComponent';
// import UserGreeting    from './components/UserGreeting';
// import NameList        from './components/NameList';
// import Stylesheet      from './components/Stylesheet';
// import Inline          from './components/Inline';
// import Form            from './components/Form';
// import FragmentDemo    from './components/FragmentDemo';
// import RefsDemo        from './components/RefsDemo';
// import PortalDemo      from './components/PortalDemo';

function App() {
  return (
    <div className="App">
    <HoverCounter/>
    <ClickCounter name='vishwas'/>
    {/* <PortalDemo/> */}
    {/* <RefsDemo/> */}
    {/* <FragmentDemo/> */}
    {/* <Form/> */}
    {/* <Inline/> */}
    {/* <Stylesheet truthy={true}/> */}
    {/* <NameList/> */}
    {/* <UserGreeting/> */}
    {/* <ParentComponent/> */}
    {/* <EventBind/> */}
    {/* <ClassClick/> */}
    {/* <FunctionClick/> */}
    {/* <Count/> */}
    {/* <Message/> */}
    {/* <Greet name="Bruce" heroName="BM" >
      <p>This is the optional child</p>
    </Greet> 
    <Greet name="Clark" heroName="SM">
      <button>optional button child</button>
    </Greet>
    <Greet name="Diana" heroName="WW"/> */}
    {/* <Welcome/> */}
    {/* <Hello/> */}
    </div>
  );
}

export default App;
