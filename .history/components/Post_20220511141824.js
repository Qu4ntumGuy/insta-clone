import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { useState } from "react";

const Post = ({ username, img, userImg, caption }) => {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  return (
    <div className="bg-white border rounded-sm text-sm border-none">
      <div className="flex items-center p-5">
        <img
          src={userImg}
          className="rounded-full h-12 w-12 object-contain
          border p-1 mr-1"
          alt=""
        />
        <p className=" text-sm flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img src={img} alt="" className=" object-cover w-full" />

      {/* Buttons */}

      {session && (
        <div className="flex justify-between p-3">
          <div className="flex space-x-3">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      <p className=" font-bold mr-3 pl-5">453 likes</p>
      <p className="pl-5 truncate">
        <span className=" font-bold mr-3">{username}</span>
        {caption}
      </p>
      <p className=" text-gray-500 pl-5 text-sm p-2">View all 12 comments</p>

      {/* Comments */}
      {comments.length > 0 && (
        <div
          className="ml-10 h-20 overflow-y-scroll
        scrollbar-thumb-black scrollbar-thin"
        >
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="flex items-center
              space-x-2 mb-3"
            >
              <img
                className="h-7 rounded-full"
                src={comment.data().userImage}
                alt=""
              />
              <p className="text-sm flex-1">
                <span className="font-bold">{comment.data().username}</span>{" "}
                {comment.data().comment}
              </p>

              <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
