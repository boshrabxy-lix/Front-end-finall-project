import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import useAddReview from '../../hooks/useAddReview';
import Loader from '../loader/Loader';

export default function WriteReviewModal({ productId }) {
    const { mutate: addReview, isPending: AddReviewPending } = useAddReview();
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        if (isSubmitting) return;
        resetForm();
        onClose();
    };

    const isValid = name.trim() !== '' && rating > 0 && review.trim() !== '';

    const handleSubmit = () => {
        if (!isValid || isSubmitting) return;
        addReview({
            productId: id,
            userName: name,
            rating,
            comment: review, 
        });
        console.log({ name, rating, review });
        handleClose();
    };
    return (
        <Box>
            <Modal open={open} onClose={handleClose} aria-labelledby="review-modal-title">
                <Box sx={{
                    p: 4, width: 420, position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    maxWidth: '92vw',
                    borderRadius: 3,
                    boxShadow: 24,
                    bgcolor: 'background.paper',
                }}>
                    <IconButton
                        onClick={handleClose}
                        size="small"
                        sx={{ position: 'absolute', top: 12, right: 12, color: 'grey.500' }}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>

                    <Typography id="review-modal-title" variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                        Write a Review
                    </Typography>

                    <TextField
                        fullWidth
                        autoFocus
                        label="Your Name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        sx={{ mb: 3 }}
                    />

                    <Typography sx={{ fontWeight: 700, mb: 1 }}>Rating</Typography>
                    <Rating
                        value={rating}
                        onChange={(e, newValue) => setRating(newValue)}
                        icon={<StarIcon sx={{ color: '#F5A623' }} fontSize="inherit" />}
                        emptyIcon={<StarBorderIcon sx={{ color: '#D9D9D9' }} fontSize="inherit" />}
                        sx={{ mb: 3, fontSize: 34 }}
                    />

                    <TextField
                        fullWidth
                        placeholder="Your Review"
                        variant="outlined"
                        multiline
                        minRows={4}
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        sx={{ mb: 3 }}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        disabled={!isValid}
                        onClick={handleSubmit}
                        sx={{ borderRadius: 5, py: 1.2, fontWeight: 700, letterSpacing: 1 }}
                    >
                        SUBMIT REVIEW
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
}