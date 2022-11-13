import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

const Logo = styled.img`
  max-height: 300px;
  width: auto,
  object-fit: cover
`;

const Header: FunctionComponent = () => {
	return (
		<Box textAlign="center">
			<Box>
				<Link href="/">
					<Logo src="/img/logo.jpg" alt="Logo" />
				</Link>
			</Box>

			<Typography variant="h1">{process.env.SITE_DESCRIPTION}</Typography>
		</Box>
	);
};

export default Header;
