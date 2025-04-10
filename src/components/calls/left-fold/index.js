import React, { useState } from "react";
import "./left-fold.css"
import { ChatsMenu } from '../../../data/chats'
import MenuItems from './menu-items';
const menu = ChatsMenu;

function LeftFold({ onSelectChat }) {
  const [selectedId, setSelectedId] = useState(null);
  const handleSelect = (chat) => {
    setSelectedId(chat.id);
    onSelectChat(chat); 
  };
  return (
    <div className='leftFold'>
      <div className='leftFold-menu'>
        <label className='menu-label'>Chats</label>
        <div className='menu-items'>
          {
            menu.map((item) => {
              return <MenuItems
                key={item.id}
                item={item}
                isActive={item.id === selectedId}
                onSelect={handleSelect} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default LeftFold 