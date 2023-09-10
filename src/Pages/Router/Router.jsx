import { Route, Routes } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'
import HomePage from '../HomePage/HomePage'

const Router = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[20%] border border-l-slate-500 ">
          <Sidebar></Sidebar>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Router
