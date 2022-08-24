import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const existingUser = this.usersRepository.findByEmail(email);

    if (existingUser) {
      throw new Error(`User with email "${email}" already exists.`);
    }

    const savedUser = this.usersRepository.create({ email, name });

    return savedUser;
  }
}

export { CreateUserUseCase };
