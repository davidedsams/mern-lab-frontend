import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
	return (
		<header className='header'>
			<h1 className='logo'>Flick Critic</h1>
			<Link className='link'> Home </Link>
			<Link className='link'> About </Link>
		</header>
	);
}

export default Header;
