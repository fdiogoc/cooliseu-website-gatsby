import React, { useContext } from 'react';
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import FirebaseContext from '../utils/FirebaseContext';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

export default (props) => {
	const { pageContext } = props;
	console.log(props);

	const [ sala, setSala ] = React.useState(props);

	const handleChange = (event) => {
		setSala(event.target.value);
	};

	const firebase = useContext(FirebaseContext);
	const inputLabel = React.useRef(null);

	return (
		<FormControl variant="outlined" fullWidth>
			<InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
				Sala
			</InputLabel>

			{value && (
				<Select
					labelid="demo-simple-select-outlined-label"
					id="demo-simple-select-outlined"
					value={sala}
					onChange={handleChange}
				>
					{value.map((doc) => (
						<MenuItem value={doc.id} key={doc.id}>
							<em>{doc.nome}</em>
							{console.log(doc)}
						</MenuItem>
					))}
				</Select>
			)}
		</FormControl>
	);
};
