import IMatchSummary from './IMatchSummary';

interface MatchesState {
	matches: IMatchSummary[];
	loading: boolean;
	error: string | null;
}

export default MatchesState;
