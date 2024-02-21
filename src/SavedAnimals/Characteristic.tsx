import React, {memo, useCallback} from "react";
import IAnimal, {ICharacteristics} from "../IAnimal";

function Characteristic({animal, charName, editAnimal}: {
    animal: IAnimal,
    charName: keyof ICharacteristics,
    editAnimal: (animal: IAnimal) => void,
}) {
    const handleOnChange = useCallback(
        () => {
            const newAnimal = Object.assign({}, animal)
            animal.characteristics[charName].like = !animal.characteristics[charName].like;
            editAnimal(newAnimal);
        }
        , [editAnimal, charName, animal]);

    if (!animal.characteristics[charName].value) {
        return null;
    }

    return (
        <label className="px-1 py-1 flex items-center">
            <input
                type="checkbox"
                className='w-4 h-4 mr-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                checked={animal.characteristics[charName].like}
                onChange={handleOnChange}
            />
            <div className="w-32 truncate">{animal.characteristics[charName].value}</div>
        </label>
    );
}

export default memo(Characteristic);