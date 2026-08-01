import React from 'react';
import './ModalModul.css';
import { Box, Container, Typography, Button } from '@mui/material';


export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <Box className="modalOverlay" onClick={onClose}
      sx={{
        bgcolor: '#00000080', display: 'flex', justifyContent: 'center',
        alignItems: 'center', zIndex: 1111, position: 'fixed',
        top: 0, bottom: 0, left: 0, right: 0
      }}>
      <Box className="modalContent" sx={{bgcolor:"#fff",p:4,borderRadius:1,position:'relative',maxWidth:'500px',width:'100%'}} onClick={(e) => e.stopPropagation()}>
       
       
       
       
        <Button className="modal-close-btn" onClick={onClose}>
          &times;
        </Button>
        {children}
      </Box>
    </Box>
  );
}
