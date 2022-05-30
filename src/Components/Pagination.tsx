import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import UseOrderQuery from "../definitions/UseOrderQuery";
import useOrderCount from "../hooks/useOrderCount";
import Order from "../definitions/orderInterface";


interface PaginationProps {
    query: UseOrderQuery,
    setQuery: (query: UseOrderQuery) => void,
    orders: Array<Order> | null | Error,
}

interface PageButtonsProps {
    query: UseOrderQuery,
    setQuery: (query: UseOrderQuery) => void,
    count: number,
}

function PageButtons({ query , setQuery, count }: PageButtonsProps) {
    const numberOfPages = Math.ceil(count / query.limit);
    if (numberOfPages <= 5) {
        return <Box>
            {Array(numberOfPages).fill(0).map((value, index) => {
                const pageNumber = index + 1;
                const isSelected = index === query.page;
                return <Button className={'page-button'} color={isSelected ? 'primary' : 'inherit'} onClick={() => setQuery({ ...query, page: index })}>
                    {pageNumber}
                </Button>
            })}
        </Box>
    }
    return <Box>
        {[1, 2, 0, numberOfPages - 1, numberOfPages].map((value) => {
            if (!value) {
                return  <Button className={'page-button'} color={'inherit'} disabled={true}>
                    ...
                </Button>
            }
            const pageNumber = value;
            const isSelected = value -1 === query.page;
            return <Button className={'page-button'} color={isSelected ? 'primary' : 'inherit'} onClick={() => setQuery({ ...query, page: value -1 })}>
                {pageNumber}
            </Button>
        })}
    </Box>
}

export default function Pagination({ query, setQuery, orders }: PaginationProps) {
    const count = useOrderCount(query, orders);
    const disablePrevious = query.page === 0;
    const disableNext = (query.page + 1) * query.limit >= count;

    function changePage(change: number) {
        setQuery({
            ...query,
            page: query.page + change,
        })
    }
    return <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <Button disabled={disablePrevious} color={'inherit'} startIcon={<ArrowBackIcon />} onClick={() => changePage(-1)}>
            Previous
        </Button>
        <PageButtons query={query} setQuery={setQuery} count={count} />
        <Button disabled={disableNext} color={'inherit'} endIcon={<ArrowForwardIcon />} onClick={() => changePage(1)}>
            Next
        </Button>
    </Stack>
}
