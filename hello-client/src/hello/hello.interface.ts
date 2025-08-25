export interface HelloRequest {
  name: string;
}

export interface HelloReply {
  message: string;
}

export interface HelloServiceClient {
  sayHello(data: HelloRequest): Promise<HelloReply>;
}
