import React from 'react'
import "./left-fold.css"
import { ChatsMenu } from '../../../data/chats'
import MenuItems from './menu-items';
const menu=ChatsMenu;

function LeftFold () {
  return (
    <div className='leftFold'> 
      <div className='leftFold-menu'>
        <label className='menu-label'>Chats</label>
        <div className='menu-items'>
          {
            menu.map((item)=>{
              return <MenuItems item={item}/>
            })
          }
        </div>
      </div> 
    </div>
  )
}

export default LeftFold 