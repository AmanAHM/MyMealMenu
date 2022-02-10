import React from 'react';
import "./style.css";


const Menumainpage = ({menuData}) => {

    //console.log(menuData);
  return ( <div>
        <div className="main-card--container">
    {menuData.map((curEle)=>{

const {id,image,name,category,price,Description}=curEle
        return (
            
            <div>
                
                <div className="card-container" key={id}>
          <div className="card">
              <div className="card-body">
                  <span className="card_number card-circle subtle">
                      {category}
                  </span>
                      <span className="card_author subtle">
                        {name}
                      </span>
                      <h2 className="card-title">{name}</h2>
                      <div><span className="card-description subtle">{price}</span></div>
                      <span className="card-description subtle">
                        {Description}
                      </span>
                      <div className="card-read">READ</div>
                      
                  </div>
                     <img src={curEle.image} alt=""></img> 
                    <div className="card-tag subtle"> Order Now </div>
              </div>
          </div>
          

            </div>
        )
    })};

</div>




  </div>);
};

export default Menumainpage;
