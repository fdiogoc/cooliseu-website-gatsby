import React, { useContext, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import useForm from 'react-hook-form';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { green } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import FirebaseContext from '../../utils/FirebaseContext';

const id = 'hyFNlYOth7RXn0y1yLZJ';

const useStyles = makeStyles((theme) => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white
		}
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	greenAvatar: {
		margin: 10,
		color: '#fff',
		backgroundColor: green[500]
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},

	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		marginTop: 15
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	},
	form: {
		marginTop: 15,
		width: '100%'
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		color: '#fff !important',
		backgroundColor: green[500]
	}
}));

export default ({ props, value, loading }) => {
	const Firebase = useContext(FirebaseContext);

	const { register, errors, handleSubmit } = useForm();
	const onSubmit = (data) => {
		if (sala && horario) {
			const newAgendaRef = Firebase.store.collection('agendas').doc();

			newAgendaRef
				.set({
					id: newAgendaRef.id,
					eventoId: sala.eventoId,
					horario: horario,
					salaId: sala.id,
					participanteId: id
				})
				.then(function(docRef) {})
				.catch(function(error) {
					console.error('Error adding document: ', error);
				});
		}
	};

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
		setHorario(event.target.value);
	};

	const classes = useStyles();

	return (
		<div className={classes.form}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<form onSubmit={handleSubmit(onSubmit)} className={classes.form} noValidate>
					<div className={classes.paper}>
						<Avatar className={classes.greenAvatar}>
							<AssignmentIcon />
						</Avatar>

						<Typography component="h1" variant="h5">
							Agende um horário
						</Typography>

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

						<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
							Agendar
						</Button>
						<Grid container>
							<Grid item>
								<Link href="#" variant="body2">
									{'Logout'}
								</Link>
							</Grid>
						</Grid>
					</div>
				</form>
			</Container>
		</div>
	);
};
