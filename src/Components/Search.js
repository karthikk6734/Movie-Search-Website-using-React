import React from 'react';

function Search({handleInput,handleResult}){
    return(
            <input id="inputfield" type="text"
        placeholder="Search your Favourite Movie"
        onChange={handleInput}
        onKeyDown={handleResult}
        />
    )
}
export default Search;