import React, { useContext } from 'react';
import { Link, graphql } from 'gatsby';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import Layout from '../components/layout';

import styled from 'styled-components';

import SEO from '../components/seo';
import { useSiteMetaData } from '../hooks/use-site-metadata';

import AuthContext from '../utils/AuthContext';
import LoginButton from '../components/GoogleLoginButton';

const Span = styled.span`text-transform: capitalize;`;

const Section = styled.section`
	background: ${(props) => {
		return props.cor;
	}}!important;
`;

export default ({ data, pageContext }) => {
	const { nome, inicio, descricao, image, cor } = useSiteMetaData();
	const Auth = useContext(AuthContext);
	const { setAuthUser, authUser } = useContext(AuthContext);
	return (
		<Layout>
			<SEO title={nome} />

			<Section id="one" className="main style1 special" cor={cor}>
				<div className="grid-wrapper">
					<div className="col-12">
						<div className="dangerouslySetInnerHTML" dangerouslySetInnerHTML={{ __html: descricao }} />
					</div>
					<div className="col-12">
						<header className="major">
							<h2>Palestras</h2>
						</header>
					</div>
					{data.allPalestra.nodes.map(({ id, tema, palestrante, data, descricao }) => {
						return (
							<div className="col-6" key={id}>
								<div className="data_dia">
									{format(new Date(data), 'dd/MM', {
										locale: ptBR
									})}
								</div>
								<div className="data_horario">
									<Span>
										{format(new Date(data), 'eeee - ', {
											locale: ptBR
										})}
									</Span>
									{format(new Date(data), 'p', {
										locale: ptBR
									})}
								</div>

								<header className="major">
									<h2>
										{tema}
										<br />
									</h2>
									<h5> {palestrante.nome}</h5>
								</header>
								<p>{descricao}</p>
							</div>
						);
					})}
				</div>
			</Section>
			<section id="three" className="main style1 special">
				<div className="grid-wrapper">
					<div className="col-12">
						<header className="major">
							<h2>Palestrantes</h2>
						</header>
					</div>
					{data.allPalestrante.nodes.map(({ id, descricao, nome, image }) => {
						console.log(image);

						return (
							<div key={id} className="col-4">
								<span className="image fit">
									<img src={image[0].src} alt="" />
								</span>
								<h3>{nome}</h3>
								<p>{descricao}</p>
							</div>
						);
					})}
				</div>
			</section>

			<section id="four" className="main style2 special">
				<div className="container">
					<header className="major">
						<h2>Que fazer um agendamento?</h2>
					</header>

					<ul className="actions uniform">
						<li>
							<LoginButton className="button special" />
						</li>
					</ul>
				</div>
			</section>
		</Layout>
	);
};
export const query = graphql`
	query($eventoId: String) {
		allPalestrante(filter: { evento: { id: { eq: $eventoId } } }) {
			nodes {
				id
				nome
				descricao
				image {
					src
				}
				evento {
					nome
				}
			}
		}
		allPalestra(filter: { evento: { id: { eq: $eventoId } } }) {
			nodes {
				id
				tema
				descricao
				data
				palestrante {
					nome
				}
			}
		}
	}
`;
