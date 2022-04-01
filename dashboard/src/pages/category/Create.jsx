import { useLocation } from 'react-router-dom';
import EditForm from '../../components/editform/EditForm';

import './create.scss';

const Create = () => {
	const type = useLocation().pathname.split('/')[1];
	const id = useLocation().pathname.split('/')[3];
	return (
		<div className='create'>
			<div className='createContainer'>
				<EditForm id={id} type={type} />
			</div>
		</div>
	);
};

export default Create;
