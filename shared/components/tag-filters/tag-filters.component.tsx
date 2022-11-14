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
			variant={getChipVariant(tag.id)}
			label={tag.name}
			key={index}
			onClick={() => handleTagChosen(tag.id)}
		/>
	);

	const getChipVariant = (tagId) => {
		return selectedTagId === tagId ? 'filled' : 'outlined';
	};

	return (
		<Box textAlign="center">
			<Typography variant="h2" py={1}>
				Filter by tags
			</Typography>
			<Stack
				spacing={1}
				direction="row"
				justifyContent="center"
				alignItems="center"
			>
				<Chip
					label="All"
					onClick={() => handleTagChosen(undefined)}
					variant={getChipVariant(undefined)}
				/>
				{tags.map(renderTag)}
			</Stack>
		</Box>
	);
};

export default TagFilters;
