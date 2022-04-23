import React,{ useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import NavBar from "./components/header/NavBar";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import {BrowserRouter as Router} from 'react-router-dom';
const App=()=>{
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
  <>
	<Router>
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
	    <NavBar />
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
      
    </div>
    </Router>
    
    </>
  );
};

export default App;