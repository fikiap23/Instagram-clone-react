import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import './ReqUserPostCard.css'

const ReqUserPostCard = () => {
  return (
    <div className="p-2">
      <div className="w-60 h-60 post">
        <img
          className="cursor-pointer"
          src="https://cdn.pixabay.com/photo/2023/05/14/17/46/ducklings-7993465_640.jpg"
          alt=""
        />
        <div className="overlay">
          <div className="overlay-text flex justify-center items-center gap-10">
            <div>
              <AiFillHeart />
              <span>10</span>
            </div>
            <div>
              <FaComment />
              <span>10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReqUserPostCard
