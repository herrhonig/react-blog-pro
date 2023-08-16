import React, { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames';

import { Modal } from 'shared/ui/Modal';
import { Loader } from 'shared/ui/Loader/ui/Loader';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

import cls from './LoginModal.module.scss';

interface Props {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: React.FC<Props> = ({
    className,
    isOpen,
    onClose,
}) => (
    <Modal
        lazy
        isOpen={isOpen}
        onClose={onClose}
        className={classNames(cls.LoginModal, {}, [className])}
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
);
