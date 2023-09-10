import { useState } from 'react'
import { AiOutlineTable, AiOutlineUser } from 'react-icons/ai'
import { RiVideoAddLine } from 'react-icons/ri'
import { BiBookBookmark } from 'react-icons/bi'
import ReqUserPostCard from './ReqUserPostCard'

const ReqUserPostPart = () => {
  const [activeTab, setActiveTab] = useState()
  const tabs = [
    {
      tab: 'Posts',
      icon: <AiOutlineTable />,
      activeIcon: '',
    },
    {
      tab: 'Reels',
      icon: <RiVideoAddLine />,
    },
    {
      tab: 'Saved',
      icon: <BiBookBookmark />,
    },
    {
      tab: 'Tagged',
      icon: <AiOutlineUser />,
    },
  ]
  return (
    <div>
      <div className="flex space-x-14 border-t justify-center">
        {tabs.map((item, index) => (
          <div
            key={index}
            className={`${
              activeTab === item.tab ? 'border-t-2 border-black' : 'opacity-60'
            } flex items-center cursor-pointer py-2`}
            onClick={() => setActiveTab(item.tab)}
          >
            <p className="mr-2">{item.icon}</p>
            <p>{item.tab}</p>
          </div>
        ))}
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item, index) => (
            <ReqUserPostCard key={index}> </ReqUserPostCard>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReqUserPostPart
