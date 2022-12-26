import React from 'react';

import "./country.modiul.css";

const Country = (props) => {
    const {name, flags, capital, population, area} = props.country;


    const handleRemoveCountry = (name) =>{
      props.onRemoveCountry(name);
    }
  return (
    <article className="country">
        <div >
            <img src={flags.png} alt={name.common} className="flag" />
                <h3>Name : {name.common}</h3>
                <h3>Pupulation : {population}</h3>
                <h3>Capital : {capital}</h3>
                <h3>Area : {area}</h3>
                <button className='btn' onClick={()=>{handleRemoveCountry(name.common)}}>Remove Country </button>
        </div>
    </article>
  )
}

export default Country