import {useEffect, useState} from "react";

interface resourceStateInterface<T> {
    resource: null | Array<T> | Error,
    refreshResource: () => void,
}
// returns Either null - loading, Array<T> Successful result, Error - load failed
export default function useResource<T>(resourceName: string, query?: object | null) {
    const [resource, setResource] = useState<resourceStateInterface<T>>({
        resource: null,
        refreshResource: () => {},
    });
    useEffect(() => {
        if (query === null) {
            return;
        }
        async function loadResource() {
            // TODO: This conversion from object to Record<string, string>
            // @ts-ignore
            const queryString = query ? '?' + new URLSearchParams(query) : '';
            const url = `${process.env.REACT_APP_API_URL}/${resourceName}${queryString}`;
            const result = await fetch(url);
            if (!result.ok) {
                // TODO: My solution for Error handling is usually to wrap fetch with a provider that will display error
                setResource({
                    resource: new Error(`Failed to load ${resourceName} with status - ${result.status}`),
                    refreshResource: loadResource,
                });
                return;
            }
            setResource({
                resource: await result.json(),
                refreshResource: loadResource,
            });
            return;
        }
        loadResource();
    }, [query]);
    return resource;
}
