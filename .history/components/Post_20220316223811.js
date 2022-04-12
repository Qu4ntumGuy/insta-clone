import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from
 "@heroicons/react/solid";

const Post = ({ username, img, userImg, caption }) => {
  return <div>
      <div className="flex items-center p-5">
          <img src={userImg} className="rounded-full h-12 w-12 object-contain
          border p-1 mr-3" alt="" />
          <p>{username}</p>
          <DotsHorizontalIcon className="h-5" />
      </div>
  </div>;
};

export default Post;
