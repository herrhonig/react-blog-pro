import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Input } from 'shared/ui/Input/ui/Input';
import {
    Button,
    ButtonTheme,
} from 'shared/ui/Button/Button';

import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import {
    addCommentFormError,
    addCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';

import cls from './AddCommentForm.module.scss';

interface Props {
    className?: string;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

export const AddCommentForm: React.FC<Props> = memo(({ className }) => {
    const { t } = useTranslation('comment');
    const dispatch = useAppDispatch();

    const text = useSelector(addCommentFormText);
    const error = useSelector(addCommentFormError);

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    placeholder={t('Введите текст комментария...')}
                    value={text}
                    onChange={onCommentTextChange}
                />

                <Button
                    theme={ButtonTheme.OUTLINE}
                    disabled={!text?.length}
                >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
