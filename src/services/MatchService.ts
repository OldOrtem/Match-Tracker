import IMatch from '../models/IMatch';
import IMatchesData from '../models/IMatchesData';
import IMatchSummary from '../models/IMatchSummary';
import ISuccessfulResponse from '../models/ISuccessfulResponse';
import ITransport from '../models/ITransport';
import transport from './../transport/Transport'; // Путь к транспорту

class MatchService {
	private static instance: MatchService;
	private transport: ITransport;

	private constructor(transport: ITransport) {
		this.transport = transport;
	}

	// Метод для получения списка матчей
	static getInstance(transport: ITransport): MatchService {
		if (!MatchService.instance) {
			MatchService.instance = new MatchService(transport);
		}
		return MatchService.instance;
	}

	private transformMatch(match: IMatch): IMatchSummary {
		return {
			homeTeam: match.homeTeam.name,
			awayTeam: match.awayTeam.name,
			homeScore: match.homeScore,
			awayScore: match.awayScore,
			status: match.status,
		};
	}

	async fetchMatches(): Promise<IMatchSummary[]> {
		try {
			// Отправляем запрос к API
			const response = await this.transport.get<
				ISuccessfulResponse<IMatchesData>
			>('/fronttemp');

			// Если ответ успешный, возвращаем список матчей
			if (response.ok) {
				return response.data.matches.map((match: IMatch) =>
					this.transformMatch(match)
				);
			}

			throw new Error('Failed to fetch matches');
		} catch (error) {
			console.error('Error fetching matches:', error);
			throw error;
		}
	}
}

export default MatchService.getInstance(transport);
