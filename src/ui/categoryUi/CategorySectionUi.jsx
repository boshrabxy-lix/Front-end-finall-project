import { Typography } from '@mui/material';
import { Card, CardMedia, CardContent, Box } from '@mui/material';

export default function CategorySectionUi({ category }) {
    return (
        <>
            <Box
                sx={{
                    py: 4, width: 180, height: 180, borderRadius: "50%", border: '1.5px solid #B8C4FF',
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", transition: " border-color .4s ease, color .4s ease", color: '#B8C4FF',
                    "&:hover": {
                        color: "#243ae4",
                        borderColor: "#243ae4",
                    },
                }}
            >
                <Typography fontWeight={'700'} component={'h3'} sx={{}} >{category.name}</Typography>
            </Box>
        </>
    )
}