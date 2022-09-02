import axios, { AxiosInstance } from 'axios';
import { Injectable, ErrorHandler } from '@angular/core';
import { ErrorResponse, User } from '@code-or-die/shared';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private axiosClient: AxiosInstance;
  private errorHandler: ErrorHandler;

  constructor(errorHandler: ErrorHandler) {
    this.errorHandler = errorHandler;

    // The ApiClient wraps calls to the underlying Axios client.
    this.axiosClient = axios.create({
      timeout: 3000,
      headers: {
        'X-Initialized-At': Date.now().toString(),
      },
    });
  }

  async getUsers(): Promise<User[]> {
    try {
      const axiosResponse = await this.axiosClient.request({
        method: 'get',
        url: '/api/users',
      });

      return axiosResponse.data;
    } catch (error) {
      return Promise.reject(this.normalizeError(error));
    }
  }

  private normalizeError(error: any): ErrorResponse {
    this.errorHandler.handleError(error);
    return {
      id: '-1',
      code: 'UnknownError',
      message: 'An unexpected error occurred.',
    };
  }
}
