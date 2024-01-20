import Ajv from 'ajv';
import { UserDto } from '../../domain';
import userSchema from '../schemas/user.schema.json'

const ajv = new Ajv();

const validateUser = ajv.compile(userSchema);

export const validateUserData = (userData: UserDto) => {
    const isValid = validateUser(userData);
    if (!isValid) {
        console.error(validateUser.errors);
    }
    return isValid;
};