interface ITransport {
	get<T>(endpoint: string, params?: Record<string, string>): Promise<T>;
}

export default ITransport;
