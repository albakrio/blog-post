import {
	DELETE_POST,
	NEW_POSTS,
	EDIT_POSTS,
	DELETE_ANSWER,
	DELETE_COMMENT,
} from './types';

export const createPost = (newPost) => {
	return {
		type: NEW_POSTS,
		newPost,
	};
};
export const editPost = (edittedPost) => {
	return {
		type: EDIT_POSTS,
		post: edittedPost,
	};
};

export const removePost = (toBeDeleted) => {
	return {
		type: DELETE_POST,
		toBeDeleted,
	};
};

export const removeAnswer = (toBeDeleted, postId) => {
	return {
		type: DELETE_ANSWER,
		toBeDeleted,
		postId,
	};
};

export const removeComment = (toBeDeleted) => {
	return {
		type: DELETE_COMMENT,
		toBeDeleted,
	};
};
