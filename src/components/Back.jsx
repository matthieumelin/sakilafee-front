import React from 'react'
import { Link } from 'react-router-dom';

import styled from 'styled-components'

import { ArrowBack } from '@mui/icons-material';

export default function Back({ route }) {
    return (
        <Container to={route}><ArrowBack /> Retour</Container>
    )
}

const Container = styled(Link)`
display:flex;
align-items:center;
width: 24px;
height: 24px;
color: inherit;
text-decoration: none;
gap: 5px;
font-weight: 400;
`;