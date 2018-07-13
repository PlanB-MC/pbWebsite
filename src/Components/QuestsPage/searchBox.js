import React from 'react';
import '../../Css/memberSearch.css'
 
const SearchBox = ({ searchChange, selectedOption, radioChange, settings, sortOrder, a2z }) => {
  return (
    <div className="my-2">
      
      <input className='w-75 p-2 pl-3 my-2' type='search' placeholder={settings[0]} onChange={searchChange} />
      <hr className="hrSubtle" />
      <div className="row">
      
        <div className="col-sm-6">
        <form className="form-inline mt-2 px-5">
        
        <div className="centerMe">
          <input type="radio" id="r1" name="r1" value={settings[1]} checked={selectedOption === settings[1]} onChange={radioChange}/>
          <label htmlFor="r1"><span></span>{settings[1]} </label>
        </div>

        <div className="centerMe">
          <input type="radio" id="r2" name="r2" value={settings[2]} checked={selectedOption === settings[2]} onClick={radioChange}/>
          <label htmlFor="r2"><span></span>{settings[2]} </label>
        </div>

        <div className="centerMe">
          <input type="radio" id="r3" name="r3" value={settings[3]} checked={selectedOption === settings[3]} onClick={radioChange}/>
          <label htmlFor="r3"><span></span>{settings[3]} </label>
        </div>
        
      </form>
     




      
        </div>

        <div className="col-sm-6">
        <form className="form-inline mt-2 px-5">
        
        <div className="centerMe">
          <input type="radio" id="rA2Z" name="r1" value={"A -> Z"} checked={sortOrder === "A -> Z"} onChange={a2z}/>
          <label htmlFor="rA2Z"><span></span>Sort A-Z </label>
        </div>
  
        <div className="centerMe">
          <input type="radio" id="rZ2A" name="r2" value={"Z -> A"} checked={sortOrder === "Z -> A"} onClick={a2z}/>
          <label htmlFor="rZ2A"><span></span>Sort Z-A </label>
        </div>
        
      </form>
        </div>
      </div>

     
    </div>
  );
}

export default SearchBox;