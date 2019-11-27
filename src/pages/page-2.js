import React, { useContext } from 'react';

import Layout from '../components/layout';
import FormAgenda from './formAgenda';
import AuthContext from '../utils/AuthContext';
export default (props) => {
	const Auth = useContext(AuthContext);
	const { setAuthUser, authUser } = useContext(AuthContext);
	const { pageContext } = props;
	if (authUser !== '') {
		return (
			<Layout>
				<FormAgenda {...pageContext} />
			</Layout>
		);
	} else {
		return (
			<Layout>
				<div>Sem autenticação</div>
			</Layout>
		);
	}
};
