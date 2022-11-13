import React, { FunctionComponent, ReactNode } from 'react';
import { MetaTags } from '../../../interfaces/meta-tags';
import Meta from '../meta';

type Props = {
	metaTags: MetaTags;
	children: ReactNode;
};
const Layout: FunctionComponent<Props> = ({ metaTags, children }) => {
	return (
		<>
			<Meta tags={metaTags} />
			<main>{children}</main>
		</>
	);
};

export default Layout;
