import React, {memo} from "react";
import Spinner from "./Spinner";

const SearchHandler = ({isPending, error, children}: {
    isPending: boolean,
    error: string | null,
    children: React.ReactNode
}) => {
    if (isPending) {
        return <Spinner/>;
    }

    if (error) {
        return <>{error}</>;
    }

    if (Array.isArray(children) && children.length === 0) {
        return <>No results</>;
    }

    return <>{children}</>;
}

export default memo(SearchHandler);