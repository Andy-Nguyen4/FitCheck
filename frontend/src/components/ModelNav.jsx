import React from 'react';
import '../styles/ModelNav.css';

function ModelNav(props) {
	return (<div className='ModelNav'>
		<div className='ModelNavButtons'>
			<a href=".."><button className='addClothes'>&#60;</button></a>
			<a href="/model/edit"><button className='editClothes'><img src="/icons/icons8-edit.svg"></img></button></a>
		</div>
		<div className="addToCloset">
			<a href="/toBeMade"><button className='searchButton'><img src="/icons/icons8-hanger-48.png"></img></button></a>
		</div>
	</div>);
}

export default ModelNav;