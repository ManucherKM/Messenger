import { Link } from "react-router-dom"

const UserLogo = ({ stylesWrapper, stylesImg, srcImg, path }) => {
  return (
    <div className={`${stylesWrapper}`}>
      <Link to={path}>
        <img src={srcImg} alt="user-avatar" className={`rounded-full p-[2px] border-2 border-black/[.0] hover:border-green cursor-pointer ${stylesImg}`} />
      </Link>
    </div>
  )
}

export default UserLogo