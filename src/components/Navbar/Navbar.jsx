import React from 'react'
import logo from "../../assets/Images/logo.svg"
import userAvatar from "../../assets/Images/userAvatar.avif"

const Navbar = () => {
  return (
    <div className='bg-white w-[54px]'>
      <div className='mx-[11px] mt-[27px] border-b border-black/[.1]'>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className='mt-5 pb-[23px]'>
          <img src={userAvatar} alt="user-avatar" className='rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default Navbar