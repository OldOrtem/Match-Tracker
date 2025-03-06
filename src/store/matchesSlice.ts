import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import MatchesState from '../models/MatchesState';
import IMatchSummary from '../models/IMatchSummary';

const initialState: MatchesState = {
	matches: [],
	loading: false,
	error: null,
};

const matchesSlice = createSlice({
	name: 'matches',
	initialState,
	reducers: {
		fetchMatchesStart(state) {
			state.loading = true;
			state.error = null;
		},
		fetchMatchesSuccess(state, action: PayloadAction<IMatchSummary[]>) {
			state.matches = action.payload;
			state.loading = false;
		},
		fetchMatchesFailure(state, action: PayloadAction<string>) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { fetchMatchesStart, fetchMatchesSuccess, fetchMatchesFailure } =
	matchesSlice.actions;

export default matchesSlice.reducer;
