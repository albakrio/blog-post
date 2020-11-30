import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import './post-form.css';

import { connect } from 'react-redux';
import { createPost } from '../../redux/actions/PostAction';

const PostForm = ({ createPost }) => {
	const [postInfo, setPostInfo] = useState({
		title: '',
		body: '',
	});

	const changeHandler = (e) => {
		const { name, value } = e.target;
		setPostInfo({ ...postInfo, [name]: value });
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const post = {
			title: postInfo.title,
			body: postInfo.body,
			id: uuidv4(),
			answers: [],
		};

		createPost(post);

		setPostInfo({
			title: '',
			body: '',
		});

		alert('Post was submitted successfully !');
	};
	return (
		<React.Fragment>
			<h1 className='header-text'>New Post</h1>
			<Form.Group>
				<form onSubmit={submitHandler}>
					<Form.Label>Title</Form.Label>
					<Form.Control
						type='text'
						name='title'
						onChange={changeHandler}
						value={postInfo.title}
						placeholder='add title'
						required
					/>
					<br />
					<Form.Label>Description</Form.Label>
					<Form.Control
						type='text'
						name='body'
						onChange={changeHandler}
						value={postInfo.body}
						placeholder='write description'
						as='textarea'
						rows={3}
					/>
					<br />
					<Button type='submit' variant='success'>
						Submit
					</Button>
				</form>
			</Form.Group>
		</React.Fragment>
	);
};

// PostForm.propTypes = {
// 	createPost: PropTypes.func.isRequired,
// };

export default connect(null, { createPost })(PostForm);
