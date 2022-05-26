import Customer from "./customerInterface";

export default interface Order {
    id: string,
    customer: Customer,
    invoiceId: string,
    invoiceName: string,
    status: string,
    purchase: string,
    createdAt: number,
}
