import { render, screen, fireEvent } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
    test('Test render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test sidebar toggling', () => {
        renderWithTranslation(<Sidebar />);

        const toggleBtn = screen.getByTestId('toggleBtn');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();

        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
