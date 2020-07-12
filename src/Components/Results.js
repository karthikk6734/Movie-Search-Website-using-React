import React from 'react';
function Results({results}) {
    return(
        <section className="sec">
            {results.map(results=>{
                return <div className="card">
                    <img src={results.Poster} alt=""/>
                    <h3>{results.Title}</h3>
                </div>
            })}
        </section>
    );
}

export default Results;