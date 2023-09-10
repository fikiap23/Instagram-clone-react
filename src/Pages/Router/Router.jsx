import { Route, Routes } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'
import HomePage from '../HomePage/HomePage'
import ProfilePage from '../ProfilePage/ProfilePage'

const Router = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[20%] border border-l-slate-500 ">
          <Sidebar></Sidebar>
        </div>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route
              path="/username"
              element={<ProfilePage></ProfilePage>}
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Router
