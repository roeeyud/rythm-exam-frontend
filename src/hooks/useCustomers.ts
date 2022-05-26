// TODO: to handle large number of costumers will need to implement search term
import useResource from "./useResource";
import Customer from "../definitions/customerInterface";

export default function useCustomers() {
    return useResource<Customer>('customer').resource;
}
