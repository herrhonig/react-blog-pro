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

import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';

import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

export const AddCommentForm: React.FC<AddCommentFormProps> = memo(({
    className,
    onSendComment,
}) => {
    const { t } = useTranslation('comment');
    const dispatch = useAppDispatch();

    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);

    const onChangeCommentText = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const handleCommentSend = useCallback(() => {
        onSendComment(text || '');
        onChangeCommentText('');
    }, [onSendComment, onChangeCommentText, text]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onChangeCommentText}
                />

                <Button
                    theme={ButtonTheme.OUTLINE}
                    disabled={!text?.length}
                    onClick={handleCommentSend}
                >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
