import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../features/posts/postSlice";
import { allUsers } from "../features/users/userSlice";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState('')

  const users = useSelector(allUsers)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && content) {
        dispatch(createPost(title, content, userId))

        setTitle('')
        setContent('')
        setUserId('')
    }
  }

  const canSave = title && content && userId

  const userOptions = users.map((user)=>(
    <option key={user.id} value={user.id}>
        {user.name}
    </option>
  ))


  return (
    <section className="w-full lg:basis-1/3">
      <h2 className="text-2xl font-semibold mb-1 mt-10">Create New Post</h2>
      <form onSubmit={handleSubmit} className="w-full">
          <input
            className="w-full p-4 outline-none rounded-lg bg-transparent border my-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            placeholder="Title"
          />
          <textarea
            className="w-full rounded-lg bg-transparent border p-4 outline-none my-2"
            placeholder="Write your content here...."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            name="content"
            id="content"
            rows="6"
          ></textarea>
          <select value={userId}  onChange={(e)=> setUserId(e.target.value)} name="userId" id="userId"  className="w-full rounded-lg bg-transparent border p-4 outline-none my-2">
            <option value="">Select User </option>
            {userOptions}
          </select>
          <button disabled={!canSave} type="submit" className=" disabled:opacity-25 w-full p-3 my-2 bg-slate-900 rounded-xl hover:shadow-lg ">
            Save
          </button>
      </form>
    </section>
  );
};

export default PostForm;
