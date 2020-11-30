import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';

import Answer from './posts/answer/Answer';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormInput from './form-input/FormInput';
import { editPost, removePost } from '../redux/actions/PostAction';

const Post = (item) => {
	const { title, body, id, answers, editPost, removePost } = item;

	const [toggleAnswers, setToggleAnswers] = useState(false);
	const [toggleAddAnswer, setToggleAddAnswer] = useState(false);
	const [answerBody, setAnswerBody] = useState('');

	const handleChange = (e) => {
		const { value } = e.target;
		setAnswerBody(value);
	};

	const answerSubmitHandler = (e) => {
		e.preventDefault();
		const newAnswer = {
			id: uuidv4(),
			body: answerBody,
			comments: [],
		};
		const editedPost = {
			title,
			body,
			id,
			answers: [newAnswer, ...answers],
		};
		editPost(editedPost);
		alert('answer was submitted !');
		setAnswerBody('');
	};
	return (
		<div>
			<Modal.Dialog>
				<Modal.Header
					onClick={() => {
						setToggleAnswers(false);
						setToggleAddAnswer(false);
					}}
					closeButton
				>
					<Modal.Title>{title}</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<p>{body}</p>
				</Modal.Body>

				<Modal.Footer>
					<Button
						onClick={() => setToggleAnswers(!toggleAnswers)}
						variant='primary'
					>
						See Answers
					</Button>
					<Button
						onClick={() => {
							setToggleAddAnswer(!toggleAddAnswer);
							setToggleAnswers(false);
						}}
						variant='secondary'
					>
						New Answer
					</Button>
					<Button onClick={() => removePost(id)} variant='danger'>
						Delete post
					</Button>
				</Modal.Footer>
			</Modal.Dialog>

			{toggleAnswers &&
				answers.map((answer, index) => (
					<React.Fragment key={`${index}-${answer.id}`}>
						<Answer {...answer} />
					</React.Fragment>
				))}

			{toggleAddAnswer && (
				<form onSubmit={answerSubmitHandler}>
					<FormInput onChange={handleChange} size={40} header={'New Answer'} />
				</form>
			)}
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		removePost: (id) => dispatch(removePost(id)),
		editPost: (id) => dispatch(editPost(id)),
	};
};

export default connect(null, mapDispatchToProps)(Post);
