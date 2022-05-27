import {useEffect, useState} from "react";
import useResource from "./useResource";
import Order from "../definitions/orderInterface";
import UseOrderQuery from "../definitions/UseOrderQuery";

interface UsedQuery {
    search: string,
    limit: number,
    status?: string,
    customerId?: string,
    orderByCol: string,
    order: string,
    offset: number,
}
export default function useOrders(query: UseOrderQuery) {
    const [usedQuery, setUsedQuery] = useState< UsedQuery | null>(null);

    useEffect(() => {
        if (!query) {
            return;
        }
        const newQuery: UsedQuery = {
            ...query,
            offset: query.limit * query.page,
        };
        if (newQuery?.status === 'all') {
            delete newQuery?.status;
        }
        if (newQuery?.customerId === 'all') {
            delete newQuery?.customerId;
        }
        setUsedQuery(newQuery);
    }, [query]);

    const { refreshResource, resource } = useResource<Order>('order', usedQuery);
    return {
        orders: resource,
        refreshOrders: refreshResource,
    };
}
