import React, {memo, useCallback} from "react";
import {sortInLS} from "../utils/LSUtils";
import IAnimal from "../IAnimal";
import SavedAnimalsTableRow from "./SavedAnimalsTableRow";

function SavedAnimalsTable({savedAnimals, editAnimal}: {
    savedAnimals: IAnimal[],
    editAnimal: (animal: IAnimal) => void
}) {
    const sortByRange = useCallback(
        () => {
            sortInLS();
            window.location.reload();
        }, []);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Animal
                    </th>
                    <th scope="col" className="px-6 py-3 flex items-center">
                        Range
                        <a
                            onClick={sortByRange}
                            href="#">
                            <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                            </svg>
                        </a>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Weight
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Skin type
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Diet
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Lifespan
                    </th>
                </tr>
                </thead>
                <tbody>
                {savedAnimals?.map(item => (
                    <SavedAnimalsTableRow animal={item} editAnimal={editAnimal} key={item.name}/>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default memo(SavedAnimalsTable);