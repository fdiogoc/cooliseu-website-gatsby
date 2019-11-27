import React, { useContext, useState } from 'react';

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

export default ({ props, value, loading }) => {
	const [ salas, setSalas ] = React.useState([]);

	const [ sala, setSala ] = React.useState({
		id: '',
		horarios: []
	});
	const [ horario, setHorario ] = React.useState('');

	if (value && salas.length === 0) {
		setSalas([ ...value ]);
	}

	const handleSalaChange = (event) => {
		setSala(event.target.value);
		console.log(sala);
	};
	const handleChangeH = (event) => {
		setHorario(horario);
	};

	const classes = useStyles();

	return (
		<div className={classes.form}>
			{loading && <span>Loading...</span>}
			{value && (
				<FormControl fullWidth className={classes.form}>
					<InputLabel id="sala-simple-select-label">Sala</InputLabel>
					<Select
						labelid="sala-simple-select-outlined-label"
						id="sala-simple-select-outlined"
						value={sala}
						onChange={handleSalaChange}
					>
						{salas.map((doc) => (
							<MenuItem value={doc} key={doc.id}>
								<em>{doc.nome}</em>
							</MenuItem>
						))}
					</Select>
				</FormControl>
			)}
			{sala.horarios.length > 0 && (
				<FormControl fullWidth className={classes.form}>
					<InputLabel id="horario-simple-select-label">Horário</InputLabel>
					<Select
						labelid="horario-simple-select-outlined-label"
						id="horario-simple-select-outlined"
						value={horario}
						onChange={handleChangeH}
					>
						{sala.horarios.map((doc) => {
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
		</div>
	);
};
