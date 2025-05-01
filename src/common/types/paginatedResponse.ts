type PaginatedResponse<T> = {
	data: T[];
	meta: {
		currentPage: number;
		totalPages: number;
		totalItems: number;
	};
};
