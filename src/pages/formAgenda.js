import React, { useContext } from 'react';

import useForm from 'react-hook-form';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { green } from '@material-ui/core/colors';

import SelectHookFiresotre from '../components/selectHookFirestore';

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
	submit: {
		margin: theme.spacing(3, 0, 2),
		color: '#fff !important',
		backgroundColor: green[500]
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		marginTop: 15
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

export default (props) => {
	const { register, errors, handleSubmit } = useForm();
	const onSubmit = (data) => console.log('onSubmit data:' + data);

	const classes = useStyles();

	React.useEffect(
		() => {
			console.log('useEffect formAgenda: ' + props);
		},
		[ props ]
	);

	return (
		<div>
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

						<SelectHookFiresotre {...props} className={classes.formControl} />

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
