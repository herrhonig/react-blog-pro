import React, { ErrorInfo, Suspense } from 'react';
import { withTranslation } from 'react-i18next';

import { PageError } from 'widgets/PageError/ui/PageError';

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        /* После апдейта состояния через getDerivedStateFromError
         -> вызывается ререндер
         -> показываем fallback UI (компонент ошибки)
         */
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log('error =>', error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return (
                <Suspense fallback="">
                    <PageError />
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
