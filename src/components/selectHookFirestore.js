import React, { useContext } from 'react';
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import FirebaseContext from '../utils/FirebaseContext';

import FormAgendarComp from '../components/form/FormAgendar';

import { makeStyles } from '@material-ui/core/styles';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles({
	form: {
		marginTop: 15,
		width: '100%'
	}
});

export default (props) => {
	const [ sala, setSala ] = React.useState(props);
	const [ horario, setHorario ] = React.useState('');

	const handleChange = (event) => {
		setSala(event.target.value);
		console.log(sala);
	};
	const handleChangeH = (event) => {
		setHorario(event.target.value);
	};

	const firebase = useContext(FirebaseContext);

	const [ value, loading, error ] = useCollectionDataOnce(
		firebase.store.collection('salas').where('eventoId', '==', props.eventoId),
		{
			snapshotListenOptions: { includeMetadataChanges: true }
		}
	);

	const isTaken = (data) => {
		if (data.isTaken) {
			return data;
		}
	};

	const classes = useStyles();
	return (
		<div className={classes.form}>
			{error && <strong>Error: {JSON.stringify(error)}</strong>}
			{loading && <span>Loading...</span>}
			{value && (
				<FormControl fullWidth className={classes.form}>
					<InputLabel id="sala-simple-select-label">Sala</InputLabel>
					<Select
						labelid="sala-simple-select-outlined-label"
						id="sala-simple-select-outlined"
						value={sala}
						onChange={handleChange}
					>
						{value.map((doc) => (
							<MenuItem value={doc.id} key={doc.id}>
								<em>{doc.nome}</em>
							</MenuItem>
						))}
					</Select>
				</FormControl>
			)}

			{value && (
				<FormControl fullWidth className={classes.form}>
					<InputLabel id="horario-simple-select-label">Horário</InputLabel>
					<Select
						labelid="horario-simple-select-outlined-label"
						id="horario-simple-select-outlined"
						value={horario}
						onChange={handleChangeH}
					>
						{value[0].horarios.map((doc) => {
							if (doc.isTaken == false) {
								return (
									<MenuItem value={doc.id} key={doc.id}>
										<em>{doc.dataString}</em>
									</MenuItem>
								);
							}
						})}
					</Select>
				</FormControl>
			)}

			<FormAgendarComp value={value} loading={loading} {...props} />
		</div>
	);
};
