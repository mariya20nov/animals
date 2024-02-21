import React, {memo, useCallback, useState} from 'react';
import IAnimal from "./IAnimal";
import {addToLS, editInLS, getFromLS} from "./utils/LSUtils";
import SavedAnimalsTable from "./SavedAnimals/SavedAnimalsTable";
import SearchBlock from "./SearchAnimals/SearchBlock";

function App() {
    const [savedAnimals, setSavedAnimals] = useState<IAnimal[]>(getFromLS());

    const addAnimal = useCallback(
        (animal: IAnimal) => {
            setSavedAnimals([...savedAnimals, animal]);
            addToLS(animal);
        }, [savedAnimals]);

    const editAnimal = useCallback(
        (animal: IAnimal) => {
            setSavedAnimals(animals => animals.map(
                item => item.name === animal.name ? animal : item
            ));
            editInLS(animal);
        }, []);

    return (
        <div className="p-1">
            <SearchBlock addAnimal={addAnimal}/>
            <SavedAnimalsTable
                savedAnimals={savedAnimals}
                editAnimal={editAnimal}
            />
        </div>
    )
}
export default memo(App);