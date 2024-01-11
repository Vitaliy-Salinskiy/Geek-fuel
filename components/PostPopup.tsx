import { IComment, IPost } from "@/interfaces";
import Image from "next/image";
import { useState, useEffect } from "react";

interface PostPopupProps {
  post: IPost;
  user: any;
  showPost: boolean;
  loading: boolean;
  setShowPost: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PostPopup = ({
  post,
  showPost,
  setShowPost,
  user,
  setIsLoading,
  loading,
}: PostPopupProps) => {
  const [comment, setComment] = useState<string>("");

	const closePopup = () => {
		setShowPost(false);
	}

	const addComment = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (comment === "") {
			alert("Please add a comment");
			return;
		}

		setIsLoading(true);

		const commentBody = {
			createCommentDto: {
				content: comment,
				userId: user.sub,
				postId: post._id
			},
			createMessageDto: {
				senderId: user.sub,
				receiverId: post.author._id,
			}
		};

		setComment("")

		fetch('http://localhost:5000/comments', {
			credentials: 'include',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(commentBody)
		})
			.then(res => res.json())
			.finally(() => {
				setIsLoading(false)
			})
	}

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 z-[1000] flex justify-center items-center overflow-auto`}
      style={{ backdropFilter: "blur(10px)" }}
      onClick={closePopup}
    >
      <div
        className="max-w-full lg:w-3/4 bg-white text-main-black p-4 rounded-xl flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lg:w-1/2 lg:mr-4 flex flex-col justify-center overflow-auto">
          <p className="text-[18px] font-bold text-main-black font-din text-center lg:text-left">
            {post.title.toUpperCase()}
          </p>
          <p className="text-[18px] text-main-black font-medium font-graphik-regular xl:text-[16px] text-center lg:text-left">
            {post.content}
          </p>
          <div className="relative h-[350px] w-[350px] mx-auto lg:mx-0">
            <Image
              src={`http://localhost:5000/${post.image}`}
              alt=""
              fill
            />
          </div>
          <p className="text-[18px] underline text-main-black font-graphik-regular font-medium xl:text-[16px] text-center lg:text-left">
            Автор:{" "}
            <span className="text-[20px] font-bold text-main-black font-din">
              {" "}
              {post.author.username}
            </span>
          </p>
        </div>
        <div className={`lg:w-1/2 pl-0 lg:pl-4 mt-4 lg:mt-0 overflow-auto`}>
          <div
            className="flex flex-col gap-4 max-h-[300px] overflow-y-scroll pr-2 mb-50 "
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <h3 className="text-main-black text-[20px] font-din">Коментарі</h3>
            {post.comments.map((item: IComment, index: number) =>
              item.approved ? (
                <div
                  key={`${item.date}-post-post-${index}-${item._id}-${user.sub}`}
                  className="flex items-center gap-[px] bg-main-red rounded-md px-2 py-4 relative "
                >
                  <p className="text-[14px] text-white font-bold underline  font-graphik-regular xl:text-[16px] absolute top-0.5">
                    {item.author.username}
                  </p>
                  <p className="text-[14px] text-white font-graphik-regular xl:text-[16px] max-w-[90%] mt-[10px]">
                    {item.content}
                  </p>
                </div>
              ) : null
            )}
          </div>
          <form>
            <label className="text-main-black text-[20px] font-medium font-din">
              Додайте свій коментар
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              name="comment"
              className="w-full h-10 border rounded-md text-[18px] font-din px-4 py-2 min-w-full min-h-[45px] max-h-[250px] resize-none"
            />
            <button
              disabled={loading}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2 w-full"
              onClick={(e) => addComment(e)}
            >
              {loading ? "Завантаження..." : "ДОДАТИ КОМЕНТАР"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
