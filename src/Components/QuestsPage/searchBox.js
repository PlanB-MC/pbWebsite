import React from 'react';
import '../../Css/memberSearch.css'
 
const SearchBox = ({ searchfield, searchChange, selectedOption, radioChange, settings }) => {
  return (
    <div>
    
    <div className="row bg-dark searchbar">
      <div className='col-md-4'>
        <input className='col-md-12 p-2 pl-3 my-2' type='search' placeholder={settings[0]} onChange={searchChange} />
      </div>
      <div className='col-md-8'>
        <form className="form-inline">
          <div className="radio px-4 py-3 centerMe">

            <input type="radio" id="r1" name="r1" value={settings[1]} checked={selectedOption === settings[1]} onChange={radioChange}/>
            <label htmlFor="r1"><span></span>{settings[1]} </label>
        
          </div>

          <div className="radio px-4 py-3 centerMe">

            <input type="radio" id="r2" name="r2" value={settings[2]} checked={selectedOption === settings[2]} onClick={radioChange}/>
            <label htmlFor="r2"><span></span>{settings[2]} </label>
      
          </div>

          <div className="radio px-4 py-3 centerMe">

            <input type="radio" id="r3" name="r3" value={settings[3]} checked={selectedOption === settings[3]} onClick={radioChange}/>
            <label htmlFor="r3"><span></span>{settings[3]} </label>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default SearchBox;