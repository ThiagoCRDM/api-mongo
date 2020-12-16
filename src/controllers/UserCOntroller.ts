import {Request, Response} from 'express';
import UserSchema from '../schemas/User';

class UserController {

  public async index(request: Request, response: Response): Promise<Response> {
      const users = await UserSchema.find();
      return response.status(200).json(users);
  }

  public async store(request: Request, response: Response): Promise<Response>{
    const user = await UserSchema.create(request.body);

    return response.status(201).json(user);
  }
}

export default new  UserController();