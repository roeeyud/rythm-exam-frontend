import useResource from "./useResource";
import Order from "../definitions/orderInterface";
import UseOrderQuery from "../definitions/UseOrderQuery";

export default function useOrders(query: UseOrderQuery) {
    const { refreshResource, resource } = useResource<Order>('order', query);
    return {
        orders: resource,
        refreshOrders: refreshResource,
    };
}
