import { Typography } from '@mui/material';
import { Card, CardMedia, CardContent,Link } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";

export default function CategoryUi({ category }) {
    return (
        <>
            <Link component={RouterLink} to={`/Products/category/${category.id}`} underline="none" sx={{ color: 'inherit' }}>
                <Card sx={{ py: 4, textAlign: 'center' }}>
                    <CardContent>
                        <Typography fontWeight={'600'} component={'h3'} variant='h6'>{category.name}</Typography>
                    </CardContent>
                </Card>
            </Link>
        </>
    )
}
