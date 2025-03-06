import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/matchesStore';
import MatchService from '../services/MatchService';
import updateImg from '../assets/img/update.svg';
import errorImg from '../assets/img/error.svg';

import {
	fetchMatchesFailure,
	fetchMatchesStart,
	fetchMatchesSuccess,
} from '../store/matchesSlice';

const Header: React.FC = () => {
	const dispatch = useDispatch();

	const { loading, error } = useSelector((state: RootState) => state.matches);

	const fetchMatches = async () => {
		dispatch(fetchMatchesStart()); // Начало загрузки
		try {
			const response = await MatchService.fetchMatches();
			dispatch(fetchMatchesSuccess(response)); // Успешный ответ
		} catch (err) {
			console.error('Error fetching matches:', err);
			dispatch(fetchMatchesFailure('Failed to fetch matches.')); // Ошибка при запросе
		}
	};

	useEffect(() => {
		fetchMatches();
	}, [dispatch]);

	return (
		<header className='header max-w-screen-xl mx-auto flex flex-wrap justify-between items-center'>
			<h1 className='header__title '>Match Tracker</h1>

			<div className='header__toolbar flex items-center'>
				{error && (
					<div className='error flex items-center rounded-md'>
						<img src={errorImg} alt='error' />
						<span>Ошибка: не удалось загрузить информацию</span>
					</div>
				)}

				<button
					className='updateButt flex items-center rounded-md'
					onClick={fetchMatches}
					disabled={loading}
				>
					<span>Обновить</span>
					<img src={updateImg} alt='loading...' />
				</button>
			</div>
		</header>
	);
};

export default Header;
