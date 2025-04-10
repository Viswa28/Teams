import React from 'react'
import "./sidebar.css"
import { sidebarData, sidebarBottom, sidebarMore } from '../../../data/sidebar';
import SidebarOption from './sidebar-options';

function Sidebar() {
  const topOptions = sidebarData;
  const more = sidebarMore;
  const bottom = sidebarBottom;
  return (
    <div className='sidebar'>
      <div className='siebar-top'>
        <div> 
          {topOptions.map((option)=>{
            return (
              <SidebarOption option={option}/> 
            ) 
          })}
        </div>
        <div>
          <SidebarOption option={more}/>
        </div>
      </div >
      <div className='sidebar-bottom'>
          {bottom.map((option)=>{
            return <SidebarOption option={option}/>
          })}
      </div>
    </div>
  )
}

export default Sidebar