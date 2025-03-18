import React , {useState , useRef , useEffect} from 'react';
import Trie from "./Trie"


const SearchBar = ({users}) => {

const [query , setquery] = useState("");
const [filter , setfilter] = useState([]);
const trieref = useRef(new Trie());

useEffect(()=>{

    trieref.current = new Trie ();
    users.forEach(user => trieref.current.insert(user.name.toLowerCase())) ;
        
}, [users]);


const handlesearch = (e) =>{
const value  = e.target.value.toLowerCase();
setquery(value);
setfilter(value ? trieref.current.search(value) : []);

}

  return (
    <div className='pt-4'>
      
      <input type="text" value={query} onChange={handlesearch} placeholder='Search user' className='p-2 border-2 border-gray-600 rounded-xl w-full' />

      <ul>

        {filter.map((name , i) =>(
            <li key={i} >{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
