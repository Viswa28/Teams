import React from 'react'
import "./header.css"
function Header() {
  return (
    <div className='header'>

      <div className='header-menu'>
      <i class="fas fa-th"></i>
      </div>
      <div className='header-leftFold'>
        <label className='header-label'>
          Microsoft teams 
        </label>
      </div>
      <div className='heaer-rightFold'>
        <div className='header-search'>
        <i class="fas fa-search"></i>
          <input placeholder='Search' />
        </div>
        <div className='header-profile'>
            <div className='header-options'>
            <i class="fas fa-ellipsis-h"></i> 
            </div>
            <img className='header-avatar' src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" alt="img"/>
        </div>
      </div>

    </div>
  )
}

export default Header