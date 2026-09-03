import React, { useState } from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';

export default function FAQSection() {
    const { t } = useTranslation();
    const [expanded, setExpanded] = useState(false);


    const faqData = [
        {
            id: 'panel1',
            question: t('What is your return policy?'),
            answer: t('We offer a 30-day money-back guarantee on all items. If you are not satisfied, simply return the product in its original packaging for a full refund.')
        },
        {
            id: 'panel2',
            question: t('How long does shipping take?'),
            answer: t('Standard shipping generally takes 3-5 business days. We also offer expedited options at checkout for faster delivery.')
        },
        {
            id: 'panel3',
            question: t('Do products come with a warranty?'),
            answer: t('Yes, all of our electronics and hardware come with a standard 1-year manufacturer warranty. Extended warranties are available for purchase.')
        },
        {
            id: 'panel4',
            question: t('How can I track my order?'),
            answer: t('Once your order ships, you will receive a confirmation email containing a tracking link so you can monitor its progress right to your door.')
        }
    ];

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <Box sx={{ py: 5, mt: 8 }}>
            <Container maxWidth="md">
                <Typography variant="h4" component="h2" align="center" color="info" sx={{ fontWeight: 'bold', mb: 4, }} > {t('Frequently Asked Questions')} </Typography>

                {faqData.map((faq) => (
                    <Accordion
                        key={faq.id}
                        expanded={expanded === faq.id}
                        onChange={handleChange(faq.id)}
                        elevation={0}
                        sx={{
                            mb: 2,
                            borderRadius: '12px !important',
                            border: '1px solid #e2e8f0',
                            '&:before': { display: 'none' },
                            boxShadow: '0px 2px 4px hsla(0, 0%, 0%, 0.18)',
                            overflow: 'hidden'
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            sx={{
                                '& .MuiAccordionSummary-content': { my:2 }
                            }}
                        >
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: {xs:14, sm:18}}}>
                                {faq.question}
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails sx={{ pt: 0, pb: 2.5 }}>
                            <Typography variant='body1' sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                                {faq.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Container>
        </Box>
    );
}