import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const userIdHeader = request.headers.user_id;
    const [user_id = ""] = Array.isArray(userIdHeader)
      ? userIdHeader
      : [userIdHeader];
    const users = this.listAllUsersUseCase.execute({ user_id });

    return response.json(users);
  }
}

export { ListAllUsersController };
