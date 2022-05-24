import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { ReactComponent as HomeIcon } from '../icons/home.svg';
import { ReactComponent as ArrowRightIcon } from '../icons/arrow-right.svg';

export default function BreadCrumbs() {
    return <MuiBreadcrumbs separator={<ArrowRightIcon />} >
        <Link underline="hover" key="1" color="inherit" href="/" className={'display-flex'}>
            <HomeIcon />
        </Link>,
        <Link
            underline="none"
            color="inherit"
        >
            Dashboard
        </Link>,
        <Typography key="3" color="primary" fontWeight={600}>
            Orders
        </Typography>
    </MuiBreadcrumbs>
}
