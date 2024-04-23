import {
    ComponentStory,
    ComponentMeta,
} from '@storybook/react';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { avatar } from 'shared/assets/tests/storybook.jpeg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'Alex',
        lastname: 'Ivanov',
        age: 30,
        avatar,
        city: 'Rome',
        country: Country.Sweden,
        currency: Currency.EUR,
        username: 'alexx77',
    },
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'error77',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
