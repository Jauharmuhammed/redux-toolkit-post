import { useDispatch } from "react-redux";
import { addReaction } from "../features/posts/postSlice";

const reactioEmoji = {
  thumpsUp: '👍',
  heart: '❤️',
  victory: '✌️',
  wow: '😲',
  coffee: '☕️',
};


const ReactionButtons = ({post}) => {

    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactioEmoji).map(([name, emoji])=>{
        return (
            <button
            key={name}
            type='button'
            className="border-none outline-none font-sans"
            onClick={() => dispatch(addReaction({ postId: post.id, reaction: name}))}
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })
  return (
    <div className="flex justify-between md:justify-start md:gap-8 mt-3">{reactionButtons}</div>
  )
}

export default ReactionButtons
