import ITeam from './ITeam';

// Тип для статуса матча
type MatchStatus = 'Scheduled' | 'Ongoing' | 'Finished';

interface IMatch {
	time: string;
	title: string;
	homeTeam: ITeam;
	awayTeam: ITeam;
	homeScore: number;
	awayScore: number;
	status: MatchStatus;
}

export default IMatch;
