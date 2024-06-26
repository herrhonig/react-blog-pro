export interface User {
    id: string;
    username: string;
    avatar?: string;
}

export interface UserSchema {
    authData?: User;
    isInited?: boolean; // флаг для отслеживания подгрузки пользоателя. см. компонент App
}
