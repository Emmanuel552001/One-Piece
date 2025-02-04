import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Luffy } from "./components/Luffy/Luffy.jsx";
import { AfficherImage } from './components/AfficherImage/AfficherImage.jsx';
import { Navbar } from './components/navbar/Navbar.jsx';
export function App(){
  return (<>
  <Navbar />
  <Luffy nom="Mugi" />
  <AfficherImage nom="luffy" />
  </>);
  
}