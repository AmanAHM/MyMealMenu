import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuAPI";
import Menumainpage from "./Menumainpage";
import Navbar from "./Navbar";


const unique = [... new Set(Menu.map((curEle) => {
    return curEle.category;
})),"All"];
//console.log(unique);


const Restaurant = () => {

    const [menuData, setMenuData] = React.useState(Menu);
    const [menuList,setMenuList] = React.useState(unique);

    const Filter_item = (category) => {
            if (category=="All")
            {
                 return setMenuData(Menu);
            }

            const updatedList = Menu.filter((curelem) => {
                return curelem.category === category;
            });
            setMenuData(updatedList);
    }
        
    



    return (<div>
        <Navbar Filter_item={Filter_item} menuList={menuList}/>
        <Menumainpage menuData={menuData}></Menumainpage>
    </div>);
};

export default Restaurant;
