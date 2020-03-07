import React from 'react';

const Card = ({ title, subTitle, image, colsize}) => {
    return (
      
      <div className={colsize}>
        <div className='card text-center my-3 p-3'>
          <div className="photo"> 
          <img alt={title} className="img-fluid" src={image} onError={(e)=>{e.target.src="https://api.planb-mc.com/blocks/default-image.jpg"}}/>
          </div>
          <div>
            <h2 className="memberTitle">{title}</h2>
            <p className="text-dark">{subTitle}</p>
          </div>
        </div>
      </div>
    );
  }

const MemberCards = ({ member, rankFilter, admin, dev, sort }) => {
    
  
sort(member)

  return (
    
    <div className="row">
    
      {
        member.map((user, i) => {
      console.log(user)
          let staffCheck
          if((admin.indexOf(member[i].name) > -1 )) staffCheck = "Admin"
          else if ((dev.indexOf(member[i].name) > -1 )) staffCheck = "Developer"
          else staffCheck = "Member"


          
          let rank = staffCheck
          const colsize = "col-lg-4 col-md-6"
          if(rankFilter === "All" ){
            return (
              <Card key={i} title={member[i].name} subTitle={rank} image={"https://visage.surgeplay.com/head/150/" + member[i].uuid} colsize={colsize} />
            )
          } else if(rankFilter === "Staff" ) {
            if((staffCheck === "Admin") || (staffCheck === "Developer")){
              return ( 
                <Card key={i} title={member[i].name} subTitle={rank} image={"https://visage.surgeplay.com/head/150/" + member[i].uuid} colsize={colsize} />
              )
            }
          } else {
            if((staffCheck === "Member") ){
              return ( 
                <Card key={i} title={member[i].name} subTitle={rank} image={"https://visage.surgeplay.com/head/150/" + member[i].uuid} colsize={colsize} />
              )
            }
          } return "";
        })
      }
    </div>
  );
}

export default MemberCards;
