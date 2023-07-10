import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Modal } from 'shared/ui/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames';

import cls from './Navbar.module.scss';

interface Props {
    className?: string; // этот класс стилей принимается снаружи чтобы поправить стили вроде отступов или другие доп момменты.
}

export const Navbar: React.FC<Props> = ({ className }) => {
    const { t } = useTranslation(); // <- Передаем название namespace "about". По дефолту - "translation"
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const onToggleModal = useCallback((() => {
        setIsAuthModal((prev) => !prev);
    }), []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>

            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi eaque eum atque consectetur veritatis voluptate ut obcaecati facilis autem officiis, dolore facere tempore cumque quas, officia mollitia numquam voluptatem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi eaque eum atque consectetur veritatis voluptate ut obcaecati facilis autem officiis, dolore facere tempore cumque quas, officia mollitia numquam voluptatem.
            </Modal>
        </div>
    );
};
