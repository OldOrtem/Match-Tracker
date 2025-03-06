import { useSelector } from 'react-redux';
import { RootState } from '../store/matchesStore';
import Match from './Match';

const MatchList: React.FC = () => {
	const { matches } = useSelector((state: RootState) => state.matches);

	return (
		<div className='matches w-full'>
			<ul className='matches__list flex flex-col'>
				{matches.map((match, index) => (
					<li
						className='match flex justify-between items-center rounded-md'
						key={index}
					>
						<Match match={match} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default MatchList;
