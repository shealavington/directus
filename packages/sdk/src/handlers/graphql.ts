import { ITransport, TransportResponse } from '../transport';

export class GraphQLHandler {
	private transport: ITransport;

	constructor(transport: ITransport) {
		this.transport = transport;
	}

	private async request<T>(base: string, query: string, variables?: any): Promise<TransportResponse<T>> {
		return await this.transport.post<T>(base, {
			query,
			variables: typeof variables === 'undefined' ? {} : variables,
		});
	}

	async items<T>(query: string, variables?: any): Promise<TransportResponse<T>> {
		return await this.request('/graphql', query, variables);
	}

	async system<T>(query: string, variables?: any): Promise<TransportResponse<T>> {
		return await this.request('/graphql/system', query, variables);
	}
}
