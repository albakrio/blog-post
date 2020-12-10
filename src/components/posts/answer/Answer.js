import React, { useState } from 'react';
import { connect } from 'react-redux';
import Comment from '../../Comment';
import { removeAnswer } from '../../../redux/actions/PostAction';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './answer.css';

const Answer = ({ answer, removeAnswer, postId }) => {
	const { body, id } = answer;
	// console.log(postId);

	return (
		<div>
			<div className='answer-group'>
				<Modal.Header>
					<h5>{body}</h5>

					<Button onClick={() => removeAnswer(id, postId)} variant='danger'>
						Delete Answer
					</Button>
				</Modal.Header>
			</div>

			<Modal.Header as='h6'>Comments</Modal.Header>

			{answer.comments.map((comment, index) => (
				<React.Fragment key={`${index}-${comment.id}`}>
					<Comment {...comment} />
				</React.Fragment>
			))}
		</div>
	);
};

// change the id

const mapDispatchToProps = (dispatch) => {
	return {
		removeAnswer: (id, postId) => dispatch(removeAnswer(id, postId)),
	};
};

export default connect(null, mapDispatchToProps)(Answer);
