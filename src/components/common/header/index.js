import React from 'react'
import "./header.css"
function Header() {
  return (
    <div className='header'>
      <div className='header-menu'>
      <i class="fa fa-home" aria-hidden="true"></i>
      </div>
      <div className='header-leftFold'>
        <label className='header-label'>
          Microsoft teams
        </label>
      </div>
      <div className='header-rightFold'>
        <div className='header-search'>
          <i class="fas fa-search"></i>
          <input placeholder='Search' />
        </div>
        <div className='header-profile'>
          <div className='header-options'>
            <i class="fas fa-ellipsis-h"></i>
          </div>
          <img className='header-avatar' src="https://www.w3schools.com/howto/img_avatar.png" alt="img" />
        </div>
      </div>

    </div>
  )
}

export default Header