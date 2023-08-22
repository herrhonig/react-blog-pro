import { screen, fireEvent } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
    test('Test render', () => {
        componentRender(<Sidebar />, { initialState: {} });
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test sidebar toggling', () => {
        componentRender(<Sidebar />, { initialState: {} });

        const toggleBtn = screen.getByTestId('toggleBtn');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();

        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
