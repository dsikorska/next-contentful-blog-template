import React, { FunctionComponent, Fragment, ReactNode } from 'react';
import { MetaTags } from '../../../interfaces/meta-tags';
import Meta from '../meta';

type Props = {
  metaTags: MetaTags;
  children: ReactNode;
};
const Layout: FunctionComponent<Props> = ({ metaTags, children }) => {
  return (
    <Fragment>
      <Meta tags={metaTags} />
      <main className="max-w-full mx-auto md:max-w-[80%] lg:max-w-[70%] py-4">
        {children}
      </main>
    </Fragment>
  );
};

export default Layout;
