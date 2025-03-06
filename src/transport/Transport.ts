import ITransport from '../models/ITransport';

class Transport implements ITransport {
	private static instance: Transport;
	private baseUrl: string;

	private constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	static getInstance(baseUrl: string): Transport {
		if (!Transport.instance) {
			Transport.instance = new Transport(baseUrl);
		}
		return Transport.instance;
	}

	async get<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
		try {
			const url = new URL(`${this.baseUrl}${endpoint}`);
			if (params) {
				Object.keys(params).forEach((key) =>
					url.searchParams.append(key, params[key])
				);
			}

			const response = await fetch(url.toString(), {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			return await response.json();
		} catch (error) {
			console.error('Fetch error:', error);
			throw error;
		}
	}
}

export default Transport.getInstance('https://app.ftoyd.com/fronttemp-service');
