import axios, { AxiosStatic } from 'axios';
import { AsyncThunkAction } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue }>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true); // замоканный вызов Аксиос для Jest;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema; // объявляем тип getState для параметра asyncThunk;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    navigate: jest.MockedFn<any>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.dispatch = jest.fn(); // Для вызова теста санки объявляем jest-мок dispatch();
        this.getState = jest.fn(); // Для вызова теста санки объявляем jest-мок getState();
        this.actionCreator = actionCreator; // Сам actionCreator с типом ActionCreatorType;

        this.api = mockedAxios; // Замоканный аксиос;
        this.navigate = jest.fn();
    }

    public async callThunk(arg: Arg) {
        const actionThunk = this.actionCreator(arg);

        const actionThunkResult = await actionThunk(
            this.dispatch,
            this.getState,
            { api: this.api, navigate: this.navigate }, // Объект extra;
        );

        return actionThunkResult;
    }
}
