import React, { FunctionComponent, useState, useEffect } from 'react';
import { Box, Pagination, Stack } from '@mui/material';

type Props = {
	skip?: number;
	range: number;
	handlePaginationChange: (number: number) => void;
};
const PaginatorComponent: FunctionComponent<Props> = ({
	skip,
	range,
	handlePaginationChange
}) => {
	skip = skip ? skip : 0;

	const [page, setPageNumber] = useState(1);

	useEffect(() => {
		return setPageNumber(skip);
	}, [skip]);

	const handlePageChange = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		handlePaginationChange(value);
		setPageNumber(value);
	};

	return (
		<Stack spacing={2}>
			<Pagination
				variant="outlined"
				shape="rounded"
				count={range}
				page={page}
				onChange={handlePageChange}
			/>
		</Stack>
	);
};

export default PaginatorComponent;
