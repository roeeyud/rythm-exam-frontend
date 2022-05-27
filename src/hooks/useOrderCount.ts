import {useEffect, useState} from "react";
import useResourceCount from "./useResourceCount";
import UseOrderQuery from "../definitions/UseOrderQuery";

interface UsedQuery {
    search: string,
    status?: string,
    customerId?: string,
}
export default function useOrders(query: UseOrderQuery) {
    const [usedQuery, setUsedQuery] = useState< UsedQuery | null>(null);
    useEffect(() => {
        if (!query) {
            return;
        }
        const newQuery: UsedQuery = {
            search: query.search,
        };
        if (query.status !== 'all') {
            newQuery.status = query.status;
        }
        if (query.customerId !== 'all') {
            newQuery.customerId = query.customerId;
        }
        setUsedQuery(newQuery);
    }, [query]);

    const count = useResourceCount('order', usedQuery);
    return count;
}
