import { Request, Response } from 'express';
import { userService } from '../../application/services/user.service';
import { UserDto } from '../../domain';

export const createUserAsync = async (req: Request, res: Response) => {
    const payload: UserDto = { age: req.body.age, email: req.body.email, name: req.body.name };
    const savedResponse = await userService.createUserAsync(payload);
    res.status(savedResponse.status).json(savedResponse);
}
