import React, { FunctionComponent } from 'react';
import pjson from '../../../package.json';

const Footer: FunctionComponent = () => {
	return (
		<footer>
			<span>Version {pjson.version}</span>
		</footer>
	);
};

export default Footer;
