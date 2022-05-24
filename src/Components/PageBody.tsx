import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import BreadCrumbs from "./BreadCrumbs";
import PageHeader from "./PageHeader";

export default function PageBody() {
    return <Box mt={4} pl={4} pr={4}>
        <Container maxWidth={'xl'}>
            <BreadCrumbs />
            <PageHeader />
        </Container>
    </Box>
}
