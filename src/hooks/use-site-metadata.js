import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetaData = () => {
	const site = useStaticQuery(
		graphql`
			query SiteMetaData {
				evento(id: { eq: "Q5aCbUkA02MyuHUtewQq" }) {
					nome
					cor
					inicio(formatString: "DD/MM")
					fim(formatString: "DD/MM")
					descricao
					image {
						src
					}
					local
				}
			}
		`
	);
	return site.evento;
};
