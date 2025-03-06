import IPlayer from './IPlayer';

// Интерфейс для команды
interface ITeam {
	name: string; // Название команды
	players: IPlayer[]; // Массив игроков
	points: number; // Количество очков
	place: number; // Место в турнирной таблице
	total_kills: number; // Общее количество убийств
}

export default ITeam;
