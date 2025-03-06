// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import matchesReducer from './matchesSlice';

const store = configureStore({
	reducer: {
		matches: matchesReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
