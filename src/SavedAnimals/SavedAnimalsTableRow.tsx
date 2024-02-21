import IAnimal from "../IAnimal";
import React, {memo, useCallback} from "react";
import Range from "./Range";
import Characteristic from "./Characteristic";

function SavedAnimalsTableRow({animal, editAnimal, ...props}: {
    animal: IAnimal,
    editAnimal: (animal: IAnimal) => void
}) {
    const handleOnRangeClick = useCallback(
        (value: number, animal: IAnimal) => {
            const newAnimal = Object.assign({}, animal);
            newAnimal.range = value;
            editAnimal(newAnimal);
        }, [editAnimal]);

    return (
        <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            {...props}
        >
            <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
                {animal.name}
            </th>
            <td className="px-6 py-4">
                <Range
                    value={animal.range}
                    onChange={(value: number) => handleOnRangeClick(value, animal)}
                />
            </td>
            <td className="px-6 py-4">
                <Characteristic
                    animal={animal}
                    charName="weight"
                    editAnimal={editAnimal}
                />
            </td>
            <td className="px-6 py-4">
                <Characteristic
                    animal={animal}
                    charName="skinType"
                    editAnimal={editAnimal}
                />
            </td>
            <td className="px-6 py-4">
                <Characteristic
                    animal={animal}
                    charName="diet"
                    editAnimal={editAnimal}
                />
            </td>
            <td className="px-6 py-4">
                <Characteristic
                    animal={animal}
                    charName="lifespan"
                    editAnimal={editAnimal}
                />
            </td>
        </tr>
    )
}

export default memo(SavedAnimalsTableRow);