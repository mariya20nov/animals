import React, {memo, useCallback} from "react";

function Range({value, onChange}: {
    value: number,
    onChange: (value: number) => void
}) {
    const handleOnChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => onChange(Number(e.target.value)
        ), [onChange]);

    return (
        <input
            type="name"
            className="max-w-10 bg-gray-50 border-x-0 border-gray-300 h-6 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            min="0"
            max="100"
            value={value}
            onChange={handleOnChange}
        />
    );
}

export default memo(Range);