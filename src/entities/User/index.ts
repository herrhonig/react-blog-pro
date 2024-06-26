export {
    userReducer,
    userActions,
} from './model/slice/userSlice';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';

export type {
    User,
    UserSchema,
} from './model/types/userSchema';
