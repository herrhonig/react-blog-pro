import { AsyncThunkAction } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue }>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema; // объявляем тип getState для параметра asyncThunk;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.dispatch = jest.fn(); // Для вызова теста санки объявляем jest-мок dispatch();
        this.getState = jest.fn(); // Для вызова теста санки объявляем jest-мок getState();
        this.actionCreator = actionCreator; // Сам actionCreator с типом ActionCreatorType;
    }

    public async callThunk(arg: Arg) {
        const actionThunk = this.actionCreator(arg);
        const actionThunkResult = await actionThunk(this.dispatch, this.getState, undefined);

        return actionThunkResult;
    }
}
