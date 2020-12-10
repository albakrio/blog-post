import React, { useEffect, useState, Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removePost } from '../../redux/actions/PostAction';
import Post from '../Post';
import Postform from '../post-form/Postform';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './posts.css';

const Posts = ({ postsData, removePost }) => {
	const { posts } = postsData;

	const [toggleNewPost, setToggleNewPost] = useState(false);

	const postItems = posts
		.filter((post, index) => index < 10)
		.map((item, index) => (
			<React.Fragment key={`${item.index}-${item.id}`}>
				<Post {...item} />
			</React.Fragment>
		));

	return (
		<div>
			{toggleNewPost && <Postform />}

			<div className='header'>
				<h1>Posts</h1>
				<Button
					onClick={() => setToggleNewPost(!toggleNewPost)}
					variant='success'
				>
					click for new post !
				</Button>
			</div>

			{postItems}
		</div>
	);
};

// Posts.propTypes = {
// 	//fetchPosts: PropTypes.func.isRequired,
// 	// postsData: PropTypes.array.isRequired,
// 	//newPost: PropTypes.object,
// };

const mapStateToProps = (state) => {
	return {
		postsData: state.postsData ? state.postsData : [],
	};
};

export default connect(mapStateToProps, null)(Posts);
