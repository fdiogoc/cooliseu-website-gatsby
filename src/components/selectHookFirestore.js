import React, { useContext } from 'react';
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import FirebaseContext from '../utils/FirebaseContext';

import FormAgendarComp from '../components/form/FormAgendar';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	form: {
		marginTop: 15,
		width: '100%'
	}
});

export default (props) => {
	const firebase = useContext(FirebaseContext);

	const [ value, loading, error ] = useCollectionDataOnce(
		firebase.store.collection('salas').where('eventoId', '==', props.pageContext.eventoId),
		{
			snapshotListenOptions: { includeMetadataChanges: true }
		}
	);

	const classes = useStyles();
	return (
		<div className={classes.form}>
			{error && <strong>Error: {JSON.stringify(error)}</strong>}

			<FormAgendarComp value={value} loading={loading} {...props} />
		</div>
	);
};
