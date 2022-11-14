import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { getHref, getNavigationLink } from '../../helpers/helper';
import {
	Card as MUICard,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
	Box
} from '@mui/material';

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
	return (
		<MUICard sx={{ marginY: '2rem', display: 'flex' }}>
			<CardMedia
				component="img"
				height="250"
				image={info.heroImage}
				sx={{ maxWidth: '400px' }}
			/>
			<Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
				<CardActionArea>
					<CardContent sx={{ flex: '1 0 auto' }}>
						<Typography variant="h3" gutterBottom component="div">
							{info.title}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{info.description}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Box>
		</MUICard>
	);
};

export default Card;
