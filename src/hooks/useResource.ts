import {useEffect, useState} from "react";

// returns Either null - loading, Array<T> Successful result, Error - load failed
export default function useResource<T>(resourceName: string, query?: object) {
    const [resource, setResource] = useState<null | Array<T> | Error>(null);
    const [refreshResource, setRefreshResource] = useState<() => void>(() => {});
    useEffect(() => {
        async function loadResource() {
            // TODO: This conversion from object to Record<string, string>
            // @ts-ignore
            const queryString = query ? '?' + new URLSearchParams(query) : '';
            const url = `${process.env.REACT_APP_API_URL}/${resourceName}${queryString}`;
            const result = await fetch(url);
            if (!result.ok) {
                // TODO: My solution for Error handling is usually to wrap fetch with a provider that will display error
                setResource(new Error(`Failed to load ${resourceName} with status - ${result.status}`));
                return;
            }
            setResource(await result.json());
            return;
        }
        loadResource();
        setRefreshResource(loadResource);
    }, []);
    return {
        resource,
        refreshResource,
    };
}
