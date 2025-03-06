import IMatch from './IMatch';

type IMatchSummary = Pick<IMatch, 'homeScore' | 'awayScore' | 'status'> & {
	homeTeam: string;
	awayTeam: string;
};

export default IMatchSummary;
