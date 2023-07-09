import React, { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames';
import './styles/index.scss';

import { Modal } from 'shared/ui/Modal/Modal';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from './providers/themeProvider';

import { AppRouter } from './providers/router';

export const App = () => {
    const { theme } = useTheme();
    const [opened, setOpen] = React.useState<boolean>(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <Modal isOpen={opened} onClose={() => setOpen(false)}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi eaque eum atque consectetur veritatis voluptate ut obcaecati facilis autem officiis, dolore facere tempore cumque quas, officia mollitia numquam voluptatem.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi eaque eum atque consectetur veritatis voluptate ut obcaecati facilis autem officiis, dolore facere tempore cumque quas, officia mollitia numquam voluptatem.
                </Modal>
                <button onClick={() => setOpen((prev) => !prev)}>77777</button>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
