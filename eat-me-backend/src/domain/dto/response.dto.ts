export class ResponseDto<T> {
    response: T;
    status: number;
    isSuccess: boolean;
    errors: string[];

    constructor(response?: T, status?: number, isSuccess?: boolean, errors?: string[]) {
        this.response = response;
        this.status = status;
        this.isSuccess = isSuccess;
        this.errors = errors;
    }
}