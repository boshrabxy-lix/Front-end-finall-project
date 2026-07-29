import {  Typography } from '@mui/material';
import { Card, CardMedia, CardContent } from '@mui/material';

export default function CategoryUi({category}) {
    return (
        <>
            <Card sx={{py: 4, textAlign:'center'}}>
                <CardContent>
                    <Typography fontWeight={'600'} component={'h3'} variant='h6'>{category.name}</Typography>
                </CardContent>
            </Card>
        </>
    )
}
