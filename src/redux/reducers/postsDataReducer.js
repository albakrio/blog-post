import {
	DELETE_POST,
	NEW_POSTS,
	EDIT_POSTS,
	DELETE_ANSWER,
	DELETE_COMMENT,
} from '../actions/types';
import postsData from '../data/data';

const initialState = {
	...postsData,
};

// state looks like this:  state = {posts:[{},{},{}]}

const postsDataReducer = (state = initialState, action) => {
	//const post = action.newPost;
	switch (action.type) {
		case NEW_POSTS:
			return {
				...state,
				posts: [{ ...action.newPost }, ...state.posts],
			};

		case EDIT_POSTS:
			return {
				posts: state.posts.map((item) => {
					if (item.id === action.post.id) {
						return action.post;
					} else {
						return item;
					}
				}),
			};
		case DELETE_POST:
			const filteredPosts = state.posts.filter(
				({ id }) => id !== action.toBeDeleted
			);
			return {
				...state,
				posts: filteredPosts,
			};

		case DELETE_ANSWER:
			const newPosts = state.posts.map((post) => {
				const answerToBeDeleted = post.answers.find(
					({ id }) => id === action.toBeDeleted
				);
				if (answerToBeDeleted) {
					const newAnswers = [
						...post.answers.filter(({ id }) => id !== action.toBeDeleted),
					];
					post.answers = [...newAnswers];
				}
				return post;
			});
			return {
				...state,
				posts: newPosts,
			};

		case DELETE_COMMENT:
			const newPosts11 = state.posts.map((post) => {
				post.answers.map((answer) => {
					const commentToBeDeleted = answer.comments.find(
						({ id }) => id === action.toBeDeleted
					);

					if (commentToBeDeleted) {
						const newComments = [
							...post.answers.comments.filter(
								({ id }) => id !== action.toBeDeleted
							),
						];
						post.answers.comments = [...newComments];
					}
					return post;
				});
				return {
					...state,
					posts: newPosts11,
				};
			});

		default:
			return state;
	}
};

export default postsDataReducer;
