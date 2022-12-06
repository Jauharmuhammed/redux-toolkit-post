import { createSlice, nanoid } from "@reduxjs/toolkit";
import sub from "date-fns/sub";

const initialState = [
    {
        id: 1,
        title: 'Redux Toolkit Complete Tutorial',
        content: 'This React Redux Full Course for Beginners is a complete tutorial full of 4 hours of React and Redux Toolkit code and instruction to help you learn state management with Redux.',
        date: sub(new Date(), { minutes: 60 }).toISOString(),
        reactions: {
            thumpsUp: 0,
            heart: 0,
            victory: 0,
            wow: 0,
            coffee: 0,
        }
    },

    {
        id: 2,
        title: 'Do Nothing',
        content: 'Do nothing and stay wild.',
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumpsUp: 0,
            heart: 0,
            victory: 0,
            wow: 0,
            coffee: 0,
        }
    },
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        createPost: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumpsUp: 0,
                            heart: 0,
                            victory: 0,
                            wow: 0,
                            coffee: 0,
                        }
                    }
                }
            }
        },
        addReaction: (state, action) => {
                const {postId, reaction} = action.payload
                const existingPost = state.find(post => post.id === postId)
                if (existingPost) {
                    existingPost.reactions[reaction]++
                }
            }
    }
})

export const allPosts = (state) => state.posts

export const { createPost, addReaction } = postSlice.actions

export default postSlice.reducer