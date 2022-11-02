const UserLogo = ({ stylesWrapper, stylesImg, SrcImg }) => {
  return (
    <div className={`${stylesWrapper}`}>
      <img src={SrcImg} alt="user-avatar" className={`rounded-full p-[2px] border-2 border-black/[.0] hover:border-green ${stylesImg}`} />
    </div>
  )
}

export default UserLogo