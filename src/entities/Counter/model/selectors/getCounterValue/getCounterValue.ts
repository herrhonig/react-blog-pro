import { createSelector } from '@reduxjs/toolkit';

import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(
    getCounter,
    (counter: ReturnType<typeof getCounter>) => counter.value,
);
