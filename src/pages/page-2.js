import React, { useContext } from 'react';

import Layout from '../components/layout';
import FormAgenda from './formAgenda';

import SelectHookFiresotre from '../components/selectHookFirestore';

import AuthContext from '../utils/AuthContext';
export default (props) => {
	const Auth = useContext(AuthContext);
	const { setAuthUser, authUser } = useContext(AuthContext);
	const { pageContext } = props;
	if (authUser !== '') {
		return (
			<Layout>
				<SelectHookFiresotre {...props} />
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
