import UseOrderQuery from "../definitions/UseOrderQuery";
import useOrderCount from "../hooks/useOrderCount";

interface PaginationProps {
    query: UseOrderQuery,
    setQuery: (query: UseOrderQuery) => void,
}

export default function Pagination({ query, setQuery }: PaginationProps) {
    const count = useOrderCount(query);
    return <div>{count}</div>
}
