export {}
declare global {
	export interface HttpResponse {
		status?: boolean
		statusCode?: number
		data?: any
	}

	export interface HttpErrorResponse {
		data?: any
		statusCode: number
	}
}
