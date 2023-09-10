import { ProfileUserDetails } from '../../Components/Profile/ProfileUserDetails'
import ReqUserPostPart from '../../Components/Profile/ReqUserPostPart'

const ProfilePage = () => {
  return (
    <div className="px-20">
      <div>
        <ProfileUserDetails />
      </div>
      <div>
        <ReqUserPostPart />
      </div>
    </div>
  )
}

export default ProfilePage
