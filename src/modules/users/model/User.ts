import { v4 as uuidV4 } from "uuid";

class User {
  readonly id: string; // UUID
  name: string;
  email: string;
  admin: boolean;
  readonly created_at: Date;
  readonly updated_at: Date;

  constructor({ email, name }: Partial<Pick<User, "email" | "name">> = {}) {
    const now = new Date();

    this.id = uuidV4();
    this.name = name;
    this.email = email;
    this.admin = false;
    this.created_at = now;
    this.updated_at = now;
  }
}

export { User };
