import {  Typography } from '@mui/material';
import { Card, CardMedia, CardContent } from '@mui/material';

export default function CategorySectionUi({category}) {
    return (
        <>
            <Card sx={{py: 3, textAlign:'center',borderRadius:50}}>
                <CardContent>
                    <Typography fontWeight={'600'} component={'h3'}>{category.name}</Typography>
                </CardContent>
            </Card>
        </>
    )
}