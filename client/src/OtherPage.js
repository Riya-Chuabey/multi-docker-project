import React from 'react';
import { Link } from 'react-router-dom';

const otherFunc = () => {
    return (
	<div>
	    I am some other page!
	    <Link to="/">Go Back Home</Link>
	</div>
    );
};

export default otherFunc;
