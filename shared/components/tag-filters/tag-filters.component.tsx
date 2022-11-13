import { Chip, Stack, Typography, Box } from '@mui/material';
import React, { FunctionComponent } from 'react';

type Props = {
	tags: { id: string; name: string }[];
	selectedTagId: string;
	updatePage: (tagId: string) => void;
};

const TagFilters: FunctionComponent<Props> = ({
	tags,
	updatePage,
	selectedTagId
}) => {
	const handleTagChosen = (tagId: string) => {
		updatePage(tagId);
	};

	const renderTag = (tag, index) => (
		<Chip
			label={tag.name}
			key={index}
			onClick={() => handleTagChosen(tag.id)}
		/>
	);

	return (
		<Box textAlign="center">
			<Typography variant="h2" py={1}>
				Tags
			</Typography>
			<Stack
				spacing={1}
				direction="row"
				justifyContent="center"
				alignItems="center"
			>
				<Chip label="All" onClick={() => handleTagChosen('')} />
				{tags.map(renderTag)}
			</Stack>
		</Box>
	);
};

export default TagFilters;
