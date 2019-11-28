import React from 'react';
import { useSiteMetaData } from '../hooks/use-site-metadata';
import styled from 'styled-components';

const Section = styled.section`
	background-image: url(${(props) => {
		return props.img_background.src;
	}});
	background-color: ${(props) => {
		return props.cor;
	}};
`;

const Header = () => {
	const { nome, inicio, descricao, image, cor } = useSiteMetaData();

	if (image[1] == undefined) {
		image.push(image[0]);
	}
	return (
		<Section id="header" img_background={image[1]} cor={cor}>
			<div className="inner">
				<div className="col-12">
					<div className="col-4">
						<span className="fitLogo">
							<img src={image[0].src} alt="" />
						</span>
					</div>
					<ul className="actions">
						<li>
							<a href="#one" className="button scrolly">
								{inicio}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</Section>
	);
};

export default Header;
