import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';

import {removeComment} from '../redux/actions/PostAction'

const Comment = ({ body, id, removeComment }) => {
	return (
		<div>
			<Card>
				<ListGroup className='list-group-flush'>
					<ListGroupItem>{body}</ListGroupItem>
				</ListGroup>
			</Card>
			<Button onClick={() => removeComment(id)} variant='danger'>
				Delete Comment
			</Button>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeComment: (id) => dispatch(removeComment(id)),
	};
};

export default connect(null, mapDispatchToProps)(Comment);
