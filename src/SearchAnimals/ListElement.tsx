import React, {memo, useCallback} from "react";
import IAnimal from "../IAnimal";

const ListElement = ({animal, addAnimal, ...props}: {
    animal: IAnimal,
    addAnimal: (animal: IAnimal) => void
}) => {
    const handleOnClick = useCallback(
        () => addAnimal(animal)
        , [addAnimal, animal]);

    return (
        <li
            className="flex items-center justify-between list-none px-6 py-3 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            {...props}
        >
            {animal.name}
            <button
                className="px-2 py-1 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={handleOnClick}
            >
                Add
            </button>
        </li>
    )
}

export default memo(ListElement);