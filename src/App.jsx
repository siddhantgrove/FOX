import React from 'react'
import { Home,ContentSection,LearnMore,Login,PrivacyPolicy,About,Header,Footer, Contact, Signup} from "./Components/index.js"
import { Routes, Route } from 'react-router-dom';
import Services from './Components/Services/Services.jsx';
import Security from './Security.jsx';
function App() {

  return (
    

<>
    <Header/>

   <Routes>
      <Route path="/" element={<Security> <Home/> </Security> } />
      <Route path="/content" element={<Security> <ContentSection/></Security>} />
      <Route path = "/Learn-More" element = {<Security><LearnMore/></Security>}/>
        <Route path="/Privacy-Policy" element={<Security><PrivacyPolicy/></Security>} />
        <Route path="/about" element={<Security><About/></Security>} />
          <Route path="/contact" element={<Security><Contact/></Security>} />
          <Route path="/Services" element={<Security><Services/></Security>} />
            
            
            <Route path="/Signup" element={<Signup/>} />
            <Route path="/login" element={<Login />} />
 
    </Routes>
    <Footer/>
    </>

  );
}

export default App;

