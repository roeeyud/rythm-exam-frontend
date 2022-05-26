export default interface UseOrderQuery {
    search: string,
    page: number,
    limit: number,
    status: string,
    customerId: string,
    orderByCol: string,
    order: string
}
