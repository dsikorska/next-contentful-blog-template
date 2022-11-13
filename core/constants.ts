import { PageType, RobotsContent, MetaTags } from '../interfaces/meta-tags';
import { concatenateStrings } from '../shared/helpers/helper';

export const defaultMetaTags: MetaTags = {
	canonical: `${process.env.PUBLIC_DOMAIN}`,
	description: process.env.SITE_DESCRIPTION,
	image: `${process.env.PUBLIC_DOMAIN}/img/logo.jpg`,
	robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
	title: process.env.SITE_NAME,
	type: PageType.website
};
