import React from 'react';
import {render, screen} from '@testing-library/react';
import ListElement from './ListElement';
import IAnimal from "../IAnimal";

const testAnimal: IAnimal = {
    name: 'lion',
    range: 1,
    characteristics: {
        weight: {
            value: "120kg - 249kg",
            like: false
        },
        diet: {
            value: "Carnivore",
            like: false
        },
        skinType: {
            value: "Fur",
            like: false
        },
        lifespan: {
            value: "10 - 12 years",
            like: false
        },
    }
}

it('renders SearchLine', () => {
    render(
        <ListElement animal={testAnimal} addAnimal={() => {}}/>
    );

    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeEnabled();
});
