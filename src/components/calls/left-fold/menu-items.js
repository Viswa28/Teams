import React from 'react'
import "./menu-items.css"
function MenuItems({item,isActive,onSelect}) {
    const classList =isActive?"item-active item-menu ":"item-menu";
  return (
    <div className={classList} onClick={() => onSelect(item)}>
        <div className='item-icon'>{item.icon}</div>
        <label className='item-label'>{item.name}</label>
    </div>
  )
}

export default MenuItems 