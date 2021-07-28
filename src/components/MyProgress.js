import React from 'react';
import Progress from './Markers/Progress';
import { Button, Container, Row, Col, ProgressBar } from 'react-bootstrap';
import Circle from './Markers/Circle';
import CardPage from './CardPage.js'
export default function MyProgress() {
    return (
        <div>
            <CardPage />
            <CardPage />
            <CardPage />
        </div>
    )
}
