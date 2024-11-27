/* eslint-disable react/prop-types */
import '../../styles/auth/AuthMainBg.css'
const AuthMainBG = ({TxtScreen, FormScreen}) => {
  return (
    <>
    <div className="AuthMainBG">
      {/* left side img section */}
        {TxtScreen}
        {/* right side auth form section */}
      <div className="formSide">
        {FormScreen}
      </div>
    </div>
    </>
  )
}

export default AuthMainBG