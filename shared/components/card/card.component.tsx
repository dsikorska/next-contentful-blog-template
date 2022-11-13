import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { getHref, getNavigationLink } from '../../helpers/helper';

type Props = {
	info: {
		id: string;
		title: string;
		description: string;
		heroImage: string;
		publishedAt: Date;
		slug: string;
	};
};

const Card: FunctionComponent<Props> = ({ info }) => {
	const cardBGStyles = {
		backgroundImage: `url(${info.heroImage})`,
		background: `linear-gradient(45deg, rgba(18, 40, 76, 0.56), rgba(39, 173, 213, 0.56), rgba(79, 192, 176, 0.56)), url(${info.heroImage}) no-repeat`
	};

	return (
		<div className="flex flex-col border-2 border-solid rounded border-gray-100 transition-shadow hover:shadow overflow-hidden h-[450px]">
			<div style={cardBGStyles} className="basis-2/5 grow-[1.5] !bg-cover" />
			<div className="basis-2/5 shrink-[0.8] px-1 py-4">
				<h3 className="text-xl font-normal">{info.title}</h3>
				<p className="m-0 text-base opacity-80">{info.description}</p>
			</div>

			<div className="basis-[8%] px-1 py-4">
				<Link href={getHref()} as={getNavigationLink(info.slug)}>
					<a>Explore</a>
				</Link>
			</div>
		</div>
	);
};

export default Card;
