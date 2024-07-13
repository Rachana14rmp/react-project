import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return ( 
    <>
   
    {/* babel compiles jsx 
    Single page vs Multipage application

    In single page application, first time the requets is made to browser, it loads all html, css and js files, after which js takes over the task of changing content of website without reloading, by making api calls and fetching only data
    In multi page 
    */}
    {/* // This entire part below is called as JSX -> it contains html wherein javascript can also be used, in html we use class, whereas in jsx we use className because class is reserved keyworkd
    // Similarly for in jsvascript Fis used for looping and in html is used for lable tag, hence in jsx we use htmlFor in labels insetaed of for
    // Jsx return only one tag
    // return () is written because js=avascript can insert ; at the end, which is not required for our jsx, optional to add () */}
    
<Navbar title="Text Utils" aboutText="About"/>
<TextForm heading="Enter text to analyse below" />
{/* <About/> */}
    </>
  );
}

export default App;
