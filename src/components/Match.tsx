import IMatchSummary from '../models/IMatchSummary';
import teamLogo from '../assets/img/team.svg';

interface MatchProps {
	match: IMatchSummary;
}

const Match: React.FC<MatchProps> = ({ match }) => {
	return (
		<>
			<div className='match__team flex items-center'>
				<img src={teamLogo} alt='logo' />
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
				<img src={teamLogo} alt='logo' />
			</div>
		</>
	);
};

export default Match;
