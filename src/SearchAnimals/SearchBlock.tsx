import IAnimal from "../IAnimal";
import React, {memo, useState} from "react";
import {useFetch} from "../utils/useFetch";
import ListElement from "./ListElement";
import SearchLine from "./SearchLine";
import SearchHandler from "./SearchHandler";

const SearchBlock = ({addAnimal}: { addAnimal: (animal: IAnimal) => void }) => {
    const [name, setName] = useState<string>('');

    const {
        data,
        fetchData,
        isPending,
        error,
    } = useFetch(name);

    return (
        <div>
            <SearchLine
                name={name}
                setName={setName}
                fetchData={fetchData}
            />
            <div className="my-5 mx-auto h-48 max-w-md overflow-y-scroll text-center border border-gray-300">
                <SearchHandler isPending={isPending} error={error}>
                    {data?.map(item => (
                        <ListElement animal={item} addAnimal={addAnimal} key={item.name}/>
                    ))}
                </SearchHandler>
            </div>
        </div>
    );
};

export default memo(SearchBlock);