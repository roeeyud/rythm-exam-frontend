import {useEffect, useState} from "react";

// returns Either null - loading, Array<T> Successful result, Error - load failed
export default function useResource<T>(resourceName: string, query?: object | null) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (query === null) {
            return;
        }
        async function loadCount() {
            // TODO: This conversion from object to Record<string, string>
            // @ts-ignore
            const queryString = query ? '?' + new URLSearchParams(query) : '';
            const url = `${process.env.REACT_APP_API_URL}/${resourceName}/count${queryString}`;
            const result = await fetch(url);
            if (!result.ok) {
                return;
            }
            setCount(Number(await result.text()));
            return;
        }
        loadCount();
    }, [query]);
    return count;
}
