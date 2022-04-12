import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

const Post = ({ username, img, userImg, caption }) => {
  return (
    <div>
      <div className="flex items-center p-5">
        <img
          src={userImg}
          className="rounded-full h-12 w-12 object-contain
          border p-1 mr-3"
          alt=""
        />
        <p className=" flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img src={img} alt="" className=" object-cover w-full" />
      <div className="flex justify-between p-3">
        <div className="flex space-x-3">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn"/>
      </div>
      <p className="pl-5 truncate">
          <span className=" font-bold mr-3">{username}</span>
          {caption}
      </p>
      <p className=" text-gray-500 pl-6 text-sm">
          View all 12 comments
      </p>
    </div>
  );
};

export default Post;
