import { StatusCode } from 'status-code-enum';
import { validateUserData } from '../use-cases/user.use-case';
import { UserDto } from '../../domain';
import { ResponseDto } from '../../domain/dto/response.dto';
import { userRepository } from '../../domain/repositories/user.repository';

class UserService {

    createUserAsync = async (user: UserDto): Promise<ResponseDto<UserDto>> => {
        const validated = validateUserData(user);
        if (validated) { 
            const { age, name, email } = await userRepository.createUserAsync(user);
            return new ResponseDto<UserDto>({ age, name, email }, StatusCode.SuccessOK, true, []);
        }
        return new ResponseDto<UserDto>(null, StatusCode.ClientErrorBadRequest, false, ['Check the user model again.']);
    }
}

export const userService = new UserService();
