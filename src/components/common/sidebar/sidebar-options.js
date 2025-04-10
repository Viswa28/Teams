import React from 'react'
import "./sidebar-option.css" 
function SidebarOption({option}) {
  return (
    <div className='sidebar-option'>
        <div className='sidebar-icon'>
            {option.icon}
        </div>
        {option.name && <label className='sidebar-label'>{option.name}</label>}
    </div>
  )
}

export default SidebarOption