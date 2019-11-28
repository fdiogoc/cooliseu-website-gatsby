import React, { useContext } from 'react';

import useForm from 'react-hook-form';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { green } from '@material-ui/core/colors';

import SelectHookFiresotre from '../components/selectHookFirestore';

import FormAgendarComp from '../components/form/FormAgendar';

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
	}
}));

export default (props) => {
	const { register, errors, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);

	const classes = useStyles();

	React.useEffect(
		() => {
			console.log('useEffect formAgenda: ' + props);
		},
		[ props ]
	);

	return <SelectHookFiresotre {...props} className={classes.formControl} />;
};
