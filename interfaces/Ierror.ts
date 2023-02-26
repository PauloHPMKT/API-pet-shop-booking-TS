export interface ErrorException extends Error {
	error?: string;
	code?: string;
	path?: string;
	syscall?: string;
	stack?: string;
}
