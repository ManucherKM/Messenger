import UserLogo from '../UserLogo/UserLogo'
import logo from "../../assets/Images/logo.svg"
import userAvatar from "../../assets/Images/userAvatar.avif"

const Navbar = () => {
  return (
    <div className='bg-white w-20'>
      <div className='mx-[11px] mt-[27px] border-b border-black/[.1]'>
        <div className='flex justify-center items-center'>
          <img src={logo} alt="Logo" className="w-4/6" />
        </div>
        <UserLogo stylesWrapper={"mt-7 pb-[23px]"} SrcImg={userAvatar} />
      </div>
    </div>
  )
}

export default Navbar