export interface GoodbyeRequest {
  name: string;
}

export interface GoodbyeReply {
  message: string;
}

export interface GoodbyeServiceClient {
  sayGoodbye(data: GoodbyeRequest): Promise<GoodbyeReply>;
}
