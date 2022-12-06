import { useSelector } from "react-redux";
import { allPosts } from "../features/posts/postSlice";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";

const PostList = () => {
  const posts = useSelector(allPosts);

  const orderedPost = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPost.map((post) => (
    <article key={post.id} className="w-full p-6 border rounded-md my-4">
      <h3 className="text-2xl font-semibold mb-3">{post.title}</h3>
      <div>
        {post.content.length > 150
          ? `${post.content.substring(0, 145)}...`
          : post.content}
      </div>
      <p className="mt-2 text-gray-400 text-sm flex justify-between">
        <PostAuthor userId={post.userId} /> <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));
  return (
    <section className=" w-full lg:basis-2/3">
      <h1 className="text-5xl my-5 font-bold">Posts</h1>
      {renderedPosts}
    </section>
  );
};

export default PostList;
