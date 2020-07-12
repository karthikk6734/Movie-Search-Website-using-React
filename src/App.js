import React,{useState} from 'react';
import Search from './Components/Search';
import axios from 'axios';
import Results from './Components/Results';
function App() {
    const [state,setState] =useState({
        url:"",
        results:[],
        selected:{}
    });
    const handleInput = (e) =>{
        let url = `http://www.omdbapi.com/?s=${e.target.value}&apikey=777adb81`; 
        setState(prevState=>{
            return {...prevState,url:url}
        });
    }
    const handleResult = (e) =>{
        if(e.key==='Enter'){
            axios(state.url).then(({data})=>{
                let results = data.Search;
                setState(prevState=>{
                  return {...prevState,results:results} 
                });
            });
        }
    }
    return(
        <div>
            <header>
                <h1 id="hel">MOVIE DATABASE</h1>
                <Search handleInput={handleInput} handleResult={handleResult}/>
            </header>
            <main>
        { typeof state.results!="undefined" ? <Results results={state.results}/> : <h1>No Movies</h1> }
            </main>
        </div>
    );
}
export default App;
