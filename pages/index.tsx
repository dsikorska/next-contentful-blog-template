import React, { useEffect, useState } from 'react';

import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { defaultMetaTags } from '../core/constants';
import Layout from '../shared/components/layout/layout.component';
import { ContentfulService } from '../core/contentful';
import { BlogPost } from '../interfaces/post';
import Card from '../shared/components/card/card.component';
import Paginator from '../shared/components/paginator/paginator.component';
import TagFilters from '../shared/components/tag-filters/tag-filters.component';
import { Tag } from '../interfaces/tag';
import { Container, Grid, Box, Typography } from '@mui/material';

type Props = {
	entries: BlogPost[];
	tags: Tag[];
	url: any;
	total: number;
	skip: number;
	limit: number;
	page?: number;
};

const cards = (entries) =>
	entries.map((entry, index) => <Card info={entry} key={index} />);

const IndexPage: NextPage<Props, any> = (props: Props) => {
	const router = useRouter();
	const entries = props.entries.length ? props.entries : [];
	const tags = props.tags || [];
	const total = props.total;

	const limit = props.limit;
	const range = Math.ceil(total / limit);

	const [page, updatePage] = useState(props.page ? props.page : 1);
	const [tag, updateTag] = useState<Tag>();

	useEffect(() => {
		void router.push({ pathname: '/', query: { page: page, tag: tag?.name } });
	}, [page, tag]);

	const handleTagChosen = (tagId) => {
		updatePage(1);
		const selectedTag = tags.find((x) => x.id === tagId);
		updateTag(selectedTag);
	};

	return (
		<Layout metaTags={defaultMetaTags}>
			<Grid container spacing={2}>
				<Grid item xs={12} md={2} />
				<Grid item xs={12} md={8}>
					<Container>
						<Box textAlign="center">
							<Typography variant="h2">Latest posts</Typography>
							<Box py={2}>{cards(entries)}</Box>
							<Paginator
								handlePaginationChange={(event) => updatePage(event)}
								range={range}
								skip={page}
							/>
						</Box>
					</Container>
				</Grid>
				<Grid item xs={12} md={2}>
					<Container>
						<TagFilters
							tags={tags}
							updatePage={handleTagChosen}
							selectedTagId={tag?.id}
						/>
					</Container>
				</Grid>
			</Grid>
		</Layout>
	);
};

IndexPage.getInitialProps = async ({ query }) => {
	const contentfulService = new ContentfulService();
	let page = 1;

	if (query.page) {
		page = parseInt(query.page + '');
	}

	const { tags } = await contentfulService.getAllTags();

	const selectedTag = tags.find((x) => x.name === query.tag)?.id;

	const { entries, total, skip, limit } =
		await contentfulService.getBlogPostEntries({
			tag: selectedTag ?? '',
			skip: (page - 1) * 3,
			limit: 3
		});

	return { page, tags, entries, total, skip, limit };
};

export default IndexPage;
