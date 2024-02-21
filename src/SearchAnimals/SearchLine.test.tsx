import React from 'react';
import {render, screen} from '@testing-library/react';
import SearchLine from './SearchLine';

it('renders SearchLine', () => {
    render(
        <SearchLine
            name="lion"
            setName={() => {}}
            fetchData={() => {}}
        />
    );

    expect(screen.getByPlaceholderText('Search the animal...')).toHaveValue('lion');
    expect(screen.getByRole('button')).toBeEnabled()
});
