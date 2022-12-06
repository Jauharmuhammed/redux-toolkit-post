import { useSelector } from "react-redux";
import { allUsers } from "../features/users/userSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(allUsers);

  const author = users.find((user) => user.id === parseInt(userId));

  return <span>by {author ? author.name : "Unknow Author"}</span>;
};

export default PostAuthor;
