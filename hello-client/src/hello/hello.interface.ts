import { Observable } from 'rxjs';

export interface HelloRequest {
  name: string;
}

export interface HelloReply {
  message: string;
}

export interface HelloServiceClient {
  sayHello(data: HelloRequest): Promise<HelloReply>;
  findAllUsers(data: {}): Observable<{
    users: { id: string; name: string; isDeleted: boolean }[];
  }>;
  findUserById(data: {
    id: string;
  }): Observable<{ id: string; name: string; isDeleted: boolean }>;
  deleteUser(data: { id: string }): Observable<{ success: boolean }>;
  updateUser(data: {
    id: string;
    name: string;
  }): Observable<{ id: string; name: string; isDeleted: boolean }>;
}
