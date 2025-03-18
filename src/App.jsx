import { useEffect, useState } from "react"
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";


function App() {
  
const [users , setusers] = useState([]);

useEffect(()=>{

  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => setusers(data));
} , []);
  return (
    <div className="px-2">

      <Hero/>
      <SearchBar users={users}/>
      <Services/>
      <Pricing/>
      <ContactForm/>
      
    </div>


    
  )
}

export default App
