import { User } from 'entities/User';

export interface Comment {
    id: string;
    body: string;
    user: User;
}
