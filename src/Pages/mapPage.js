import React from 'react';
import data from '../Configs/mapData.json';
import '../Css/mapPage.css'

const listMaps = () => {
  const mKeys = Object.keys(data)
  console.log(mKeys)
  return(
    mKeys.map(a => 
      <div className="col-md-4" key={a}>
        <div className='card text-center my-1 p-2'>
            <div className="photo"> 
                <img alt={data[a].name} className="img-fluid" src={data[a].image}/>
            </div>
            <div className="px-3 pt-1">
                <h2 className="memberTitle">{data[a].title}</h2>
                <a href={"https://map.planb-mc.com/" + a} className="btn btn-outline-dark d-block my-4" target="_blank">{data[a].textLink}</a>
            </div>
          </div>
      </div>
    )
  )
}

const Maps = () => {
  return (
    <div className="map parrallax" style={{ backgroundImage: "url(https://api.planb-mc.com/webImages/map.png)"}}>
        <div className="map transp py-5"> 
            <div className="container-fluid mt-5">
                <div className="row px-5">

                {listMaps()}

                </div>  
            </div>
        </div>
    </div>
  );
}

export default Maps;