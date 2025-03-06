import IMatchSummary from '../models/IMatchSummary';

interface MatchProps {
	match: IMatchSummary;
}

const Match: React.FC<MatchProps> = ({ match }) => {
	return (
		<>
			<div className='match__team flex items-center'>
				<img src='src/assets/img/team.svg' alt='logo' />
				<p>{match.homeTeam}</p>
			</div>

			<div className='match__stats flex flex-col items-center'>
				<div className='match__score'>
					{match.homeScore} - {match.awayScore}
				</div>
				<div
					className={`rounded-md match__status match__status_${match.status}`}
				>
					{match.status}
				</div>
			</div>

			<div className='match__team flex items-center'>
				<p>{match.awayTeam}</p>
				<img src='src/assets/img/team.svg' alt='logo' />
			</div>
		</>
	);
};

export default Match;
