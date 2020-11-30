import React, { useState } from 'react';
import { connect } from 'react-redux';
import Comment from '../../Comment';
import { removeAnswer } from '../../../redux/actions/PostAction';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './answer.css';

const Answer = (answer) => {
	const { body, removeAnswer, id } = answer;
	console.log(answer);

	return (
		<div>
			<div className='answer-group'>
				<Modal.Header>
					<h5>{body}</h5>

					<Button onClick={() => removeAnswer(id)} variant='danger'>
						Delete Answer
					</Button>
				</Modal.Header>
			</div>
			{}
			<Modal.Header as='h6'>Comments</Modal.Header>

			{answer.comments.map((comment, index) => (
				<React.Fragment key={`${index}-${comment.id}`}>
					<Comment {...comment} />
				</React.Fragment>
			))}
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeAnswer: (id) => dispatch(removeAnswer(id)),
	};
};

export default connect(null, mapDispatchToProps)(Answer);
