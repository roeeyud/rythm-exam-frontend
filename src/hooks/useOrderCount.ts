import {useEffect, useState} from "react";
import useResourceCount from "./useResourceCount";
import UseOrderQuery from "../definitions/UseOrderQuery";
import Order from "../definitions/orderInterface";

interface UsedQuery {
    search: string,
    status?: string,
    customerId?: string,
}
export default function useOrderCount(query: UseOrderQuery, orders: Array<Order> | null | Error) {
    const [usedQuery, setUsedQuery] = useState< UsedQuery | null>(null);
    useEffect(() => {
        // Refresh on orders to refresh count whenever a new query is done
        // TODO: Add useOrderCount to be part of useOrder will make more sense
        if (!query || !orders) {
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
    }, [orders]);

    const count = useResourceCount('order', usedQuery);
    return count;
}
