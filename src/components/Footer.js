import React from 'react';
import { useSiteMetaData } from '../hooks/use-site-metadata';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import styled from 'styled-components';

const Section = styled.section`
	background-image: url(${(props) => {
		return props.img_background.src;
	}});
	background-color: ${(props) => {
		return props.cor;
	}};
`;

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="">
				Diogo Cardoso Fernandes
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const Footer = () => {
	const { fim, image, cor } = useSiteMetaData();

	if (image[1] == undefined) {
		image.push(image[0]);
	}

	return (
		<Section id="footer" img_background={image[1]} cor={cor}>
			<ul className="actions">
				<li>
					<a href="#one" className="button scrolly">
						{fim}
					</a>
				</li>
			</ul>

			<Box mt={8}>
				<Copyright />
			</Box>
		</Section>
	);
};

export default Footer;
