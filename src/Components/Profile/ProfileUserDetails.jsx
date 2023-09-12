import { TbCircleDashed } from 'react-icons/tb'

export const ProfileUserDetails = () => {
  return (
    <div className="py-10">
      <div className="flex items-center space-x-16">
        <div className="w-[35%] ">
          <img
            className="w-40 h-40 rounded-full"
            src="https://cdn.pixabay.com/photo/2023/08/29/19/09/starling-8221990_640.jpg"
            alt="profile"
          />
        </div>
        <div className=" space-y-5">
          <div className="flex space-x-10 items-center">
            <p>username</p>
            <button> Edit Profile</button>
            <TbCircleDashed />
          </div>
          <div className="flex space-x-10">
            <div>
              <span className="font-semibold mr-2">10</span>
              <span>posts</span>
            </div>
            <div>
              <span className="font-semibold mr-2">5</span>
              <span>followers</span>
            </div>
            <div>
              <span className="font-semibold mr-2">5</span>
              <span>following</span>
            </div>
          </div>
          <div>
            <p className="font-semibold">Full Name</p>
            <p className="font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              dignissimos dolorum eveniet omnis tempore neque sint beatae
              consequatur dolore saepe, voluptatibus eum quibusdam asperiores,
              ab praesentium. Mollitia at impedit facere.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
